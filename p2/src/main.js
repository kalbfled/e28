import App from "@/App.vue"
import Vue from "vue"
import VueRouter from "vue-router";

import ContentPage from "@/components/pages/ContentPage.vue";
import HomePage from "@/components/pages/HomePage.vue";
import VerifierPage from "@/components/pages/VerifierPage.vue";


Vue.config.productionTip = false
Vue.use(VueRouter);


const router = new VueRouter({
    mode: "history",
    routes: [
        { path: '/', component: HomePage },
        { path: '/content', component: ContentPage },
        { path: '/verifier', component: VerifierPage }
    ]
});


new Vue({
    router: router,
    render: h => h(App),
}).$mount("#app")
