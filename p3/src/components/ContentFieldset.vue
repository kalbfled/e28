<template>
    <fieldset>
        <label for="content_id">Content ID (1-100)</label>
        <input type="number" id="content_id" name="content_id" min="1" max="100" required>
        <br>

        <label for="verifier">Verifier</label>
        <input type="text" id="verifier" name="verifier" minlength="2" maxlength="50" required>
        <br>

        <label for="thumbs_up">Thumbs up? (unchecked for thumbs down)</label>
        <input type="checkbox" id="thumbs_up" name="thumbs_up" v-model="thumbs_up_checked">
        <br>

        <div v-if="!thumbs_up_checked">
            <label for="why_thumbs_down">Thumbs down category</label>
            <select id="why_thumbs_down" name="why_thumbs_down">
                <option v-for="category in thumbs_down_categories" :key="category[0]" :value="category[1]">{{ category[1] }}</option>
            </select>
            <br>

            <p>Provide evidence, including URLs. (5-250 characters)</p>
            <textarea id="evidence" cols="50" minlength="5" maxlength="250" required></textarea>
        </div>
    </fieldset>
</template>

<script>
export default {
    name: "content-fieldset",
    data() {
        return {
            thumbs_up_checked: false,
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
};
</script>

<style scoped>
    label { margin-right: 5mm; }
</style>
