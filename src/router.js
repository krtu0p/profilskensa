import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', name: 'Home', component: () => import("./pages/home.vue") },
    { path: '/about', name: 'About', component: () => import("./pages/about.vue") },
    { path: '/callback', name: 'Callback', component: () => import("./pages/callback.vue") }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
