// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from "axios"
import qs from 'qs'
Vue.prototype.axios = axios;
Vue.prototype.qs = qs
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.withCredentials = true
import router from './router'
import { TabContainer, TabContainerItem, Navbar, TabItem, header, Cell, Button, Actionsheet, Search, CellSwipe, MessageBox } from 'mint-ui'
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(header.name, header)
Vue.component(Cell.name, Cell)
Vue.component(Button.name, Button)
Vue.component(Actionsheet.name, Actionsheet)
Vue.component(Search.name, Search)
Vue.component(CellSwipe.name, CellSwipe)
Vue.component(MessageBox.name, MessageBox)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})