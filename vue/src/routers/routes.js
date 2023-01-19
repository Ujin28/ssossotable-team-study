import { createRouter, createWebHistory } from 'vue-router'
import Index from "../Pages/Index.vue";
import Main from "../Pages/Main.vue";
import Content from "../Pages/Content.vue";

const routes = [
    { path: '/', component: Index },
    { path: '/main', component: Main },
    { path: '/content/:path', component: Content }
]

const router = createRouter({ history: createWebHistory(), routes });
export { router }