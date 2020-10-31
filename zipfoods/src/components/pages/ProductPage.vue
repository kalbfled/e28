<template>
    <div>
        <show-product :product="products[id - 1]"></show-product>
    </div>
</template>

<script>
import ShowProduct from "@/components/ShowProduct.vue";
import {products} from "@/products.js";

export default {
    name: '',
    components: {
        "show-product": ShowProduct,
    },
    props: ["id"],
    data() {
        return {
            products: products,
        };
    }
};
</script>

<style scoped>
</style>
