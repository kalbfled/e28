<template>
    <div>
        <h3>{{ report.verifier }}</h3>
        <p>Thumbs <span :class="up_or_down">{{ up_or_down }}</span></p>

        <div v-if="!report.thumbs_up">
            <p>Reason: {{ report.reason }}</p>
            <p>Evidence:</p>
            <textarea cols="50" v-model="the_evidence" disabled></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: "content-report",
    props: ["report"],
    computed: {
        up_or_down() {
            return this.report.thumbs_up ? "up" : "down";
        },
        the_evidence() {
            return this.report.evidence;
        },
    }
};
</script>

<style scoped>
    span.down { background-color: red; }
    span.up { background-color: green; }
</style>
