<template>
    <div>
        <p v-if="productNotFound">Product {{ id }} not found.</p>
        <show-product v-else :product="product"></show-product>
    </div>
</template>

<script>
import ShowProduct from "@/components/ShowProduct.vue";

export default {
    name: '',
    components: {
        "show-product": ShowProduct,
    },
//    props: ["id", "products"],
    props: ["id"],
    data() {
        return {

        };
    },
    computed: {
        product() {
            return this.$store.getters.getProductById(this.id);
//            return this.products.filter(
//                (product) => { return product.id == this.id; },
//                this.id)[0];
        },
        productNotFound() {
            return this.product == null;
        }
    }
};
</script>

<style scoped>
</style>
