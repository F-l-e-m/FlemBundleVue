import './js/common.js'
import './assets/styles/main.scss'


window.Vue = require('vue');
import store from './store/store.js'

Vue.component('example-component', require('./components/Example.vue').default)

const app = new Vue({
    store,
    el: '#app'
})