<template>
    <div>
        <h2>Verifier Page</h2>
        <p>Use this page to create a new content record.</p>

        <p v-if="request_complete && !request_succeeded" class="failure">The request failed or could not be completed.  See the console.</p>
        <p v-if="request_succeeded" class="success">The request succeeded.</p>

        <form method="post" enctype="text/plain" @submit="submit_report">
            <content-fieldset :thumbs_down_categories="thumbs_down_categories"></content-fieldset>
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script>
import ContentFieldset from "@/components/ContentFieldset.vue";

export default {
    name: '',
    components: {
        "content-fieldset": ContentFieldset,
    },
    data() {
        return {
            request_complete: false,
            request_succeeded: false,
        };
    },
    computed: {
        thumbs_down_categories() {
            return [
                [1, "good reason"],
                [2, "great reason"],
                [3, "best reason"]
            ];
        },
    },
    methods: {
        submit_report(e) {
            // https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
            // https://stackoverflow.com/questions/5384712/intercept-a-form-submit-in-javascript-and-prevent-normal-submission#5384732
            e.preventDefault();

            var post_data = {
                content_id: document.getElementById("content_id").value,
                verifier: document.getElementById("verifier").value,
                thumbs_up: document.getElementById("thumbs_up").checked,
            };

            if (!post_data.thumbs_up)
            {
                post_data.reason = document.getElementById("why_thumbs_down").value;
                post_data.evidence = document.getElementById("evidence").value;
            }

            console.debug(post_data);

            var url = process.env.VUE_APP_API_URL + "/content";
            console.debug("url = ", url);

            fetch(url, { method: "POST", body: JSON.stringify(post_data) })
            .then(response => {
                this.request_complete = true;

                if (response.status == 201)
                    this.request_succeeded = true;
                else
                    console.debug(response);
            })
            .catch(e => {
                console.error(e);
                this.request_complete = true;
            });
        },
    },
};
</script>

<style scoped>
    p.failure { color: red; }
    p.success { color: green; }
</style>
