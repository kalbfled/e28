<template>
  <div class="product">
    <div class="product-name">{{ product.name }}</div>
        <img class="product-thumb" :src="require('@/images/products/' + product.id + '.jpg')">
        <p class="product-description">{{ product.description }}</p>
    <div class="product-price">${{ product.price }}</div>
  </div>
</template>

<script>
export default {
  name: 'show-product',
  props: ["product"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
