import { createApp } from 'vue'
import VueFeather from 'vue-feather';
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from './plugins/fontawesome'
import Vue3Odometer from 'vue3-odometer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


import './assets/css/default.css'


// Khoi tao vue app
const app = createApp(App)
// Su dung font awesome icon
app.component('font-awesome-icon', FontAwesomeIcon)
// Su dung vue feather;
app.component(VueFeather.name, VueFeather);
// su dung vue odometer
app.component('Vue3Odometer', Vue3Odometer)
// Su dung vue-router
app.use(router)
    // mount vo id='app'
    .mount('#app')
