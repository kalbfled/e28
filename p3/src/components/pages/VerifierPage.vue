<template>
    <div>
        <h2>Verifier Page</h2>
        <p>Use this page to create a new content record.</p>

        <div v-if="logged_in">
            <p v-if="request_complete && !request_succeeded" class="failure">The request failed or could not be completed.  See the console.</p>
            <p v-if="request_succeeded" class="success">The request succeeded.</p>

            <form method="post" enctype="text/plain" @submit="submit_report">
                <content-fieldset></content-fieldset>
                <input type="submit" value="Submit">
            </form>
        </div>
        <p v-else>You must be logged in.</p>
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
    methods: {
        submit_report(e) {
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

            fetch(url, { method: "POST", body: JSON.stringify(post_data), credentials: "include" })
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
    computed: {
        logged_in() {
            return Boolean(this.$store.state.user);
        }
    },
};
</script>

<style scoped>
    p.failure { color: red; }
    p.success { color: green; }
</style>
