import App from '@/App.vue';
import router from "@/common/router";
import store from "@/common/store";
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
    store: store,
    router: router,
    render: h => h(App),
}).$mount('#app');

