<template>
    <div id="app">
        <img id="logo" alt="Vue logo" src="@/images/zipfoods-logo.png">

        <nav>
            <ul>
                <li>
                    <router-link
                        v-for="link in links"
                        v-bind:key="link"
                        v-bind:to="paths[link]"
                        exact
                    >{{ link }}</router-link>
                </li>
            </ul>
        </nav>

        <router-view :products="products"></router-view>
    </div>
</template>

<script>
import { axios } from "@/app.js";

export default {
    name: 'App',
    data() {
        return {
            products: [],
            links: ["home", "products", "categories"],
            paths: {
                home: '/',
                products: "/products",
                categories: "/categories",
            },
        };
    },
    mounted() {
        axios.get("/product").then((response) => {
            this.products = response.data.product;
            console.log(response);
        });
    }
};
</script>

<style lang="scss">
@import "@/assets/scss/zipfoods.scss";
</style>
