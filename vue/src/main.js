import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './assets/main.css'

import { router } from "./routers/routes"
import vueCookies from "vue-cookies"

const app = createApp(App)

app.use(router)
app.use(vueCookies)
app.mount('#app')
