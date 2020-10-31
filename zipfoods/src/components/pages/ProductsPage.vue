<template>
    <div id="products">
        <h2>Products</h2>

        <div v-for="product in products" :key="product.id">
            <div class="product-name">{{ product.name }}</div>
            <router-link :to="{ name: 'product_detail', params: { id: product.id }}"><img class="product-thumb" :src="require('@/images/products/' + product.id + '.jpg')"></router-link>
        </div>
    </div>
</template>

<script>
import {products} from "@/products.js";

export default {
    name: '',
    data() {
        return {
            products: products,
        };
    }
};
</script>

<style scoped>
</style>
