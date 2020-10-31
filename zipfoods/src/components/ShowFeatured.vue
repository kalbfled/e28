<template>
    <div class="featured">
        <h2>Featured Products</h2>
        <ul class="cleanList">
            <li v-for="product in featuredProducts" :key="product.id">
                {{ product.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import {products} from "@/products.js";

export default {
    name: 'show-featured',
    props: {
        "category": String,
    },
    data() {
        return {
            products: products,
        };
    },
    computed: {
        featuredProducts() {
            return this.products.filter((product) => {
                return product.categories.includes(this.category);
            }, this.category);
        },
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
