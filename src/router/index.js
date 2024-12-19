import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import { createRouter, createWebHistory } from 'vue-router';
/* khai bao route */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

/* Cau hinh vue-router */
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
});

export default router;
