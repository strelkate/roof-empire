
import Vue from 'vue'
import App from '@/App'
import router from '@/router/router'
import store from "@/engine/store/store";
import '@/scss/styles.scss'

import Scrollspy from 'vue2-scrollspy';
Vue.use(Scrollspy);

Vue.config.productionTip = false

new Vue({
	store,
	router,
	render: function (h) { return h(App) }
}).$mount('#app')
