import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/', component: () => import('@/pages/LandingPage.vue') },
    { path: '/blog', component: () => import('@/pages/BlogsPage.vue') },
    { path: '/blog/:id', component: () => import('@/pages/BlogPage.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

const app = createApp(App);

app.use(router);
app.mount('#app')
