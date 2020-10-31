import App from './App.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from "@/components/pages/HomePage.vue";
import ProductPage from "@/components/pages/ProductPage.vue";
import ProductsPage from "@/components/pages/ProductsPage.vue";
import CategoriesPage from "@/components/pages/CategoriesPage.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: '/', component: HomePage },
        { path: '/products', component: ProductsPage },
        { path: '/categories', component: CategoriesPage },
        { path: '/products/:id', name: "product_detail", component: ProductPage, props: true }
    ]
});

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app');

