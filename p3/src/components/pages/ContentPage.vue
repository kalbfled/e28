<template>
    <div>
        <h2>Content Page</h2>
        <p>
            <label for="content_id">ID</label>
            <input v-model.number="id" @change="ID_changed" type="number" id="content_id" name="content_id" min="1" max="100">
        </p>
        <p><span class="up">{{ up_count }} up</span> <span class="down">{{ down_count }} down</span></p>

        <content-report v-for="report in reports" :key="report.ID" :report="report"></content-report>
        <p v-if="reports.length === 0">No data.</p>
    </div>
</template>

<script>
import ContentReport from "@/components/ContentReport.vue";

export default {
    name: '',
    components: {
        "content-report": ContentReport,
    },
    data() {
        return {
            id: null,
            reports: [],
            down_count: 0,
            up_count: 0,
        };
    },
    methods: {
        ID_changed() {
            console.debug("The ID changed to %d.", this.id);
            if (typeof(this.id) !== "number") return;

            var url = process.env.VUE_APP_API_URL + "/content/" + this.id;
            console.debug("url = ", url);

            fetch(url)
            .then(response => response.json())
            .then(json => {
                // The response should be a JSON array of objects.
                this.reports = json;
                this.down_count = 0;
                this.up_count = 0;

                for (let report of json)
                {
                    if (report.thumbs_up)
                        this.up_count++;
                    else
                        this.down_count++;
                }
            })
            .catch(e => {
                console.error(e);
                this.reports = [];
                this.down_count = 0;
                this.up_count = 0;
            });
        },
    },
};
</script>

<style scoped>
    label { margin-right: 5mm; }
    span.down { background-color: red; }
    span.up { background-color: green; }
</style>
