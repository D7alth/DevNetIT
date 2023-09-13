import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/customers/:id',
    name: 'customers',
    component: () => import(/* webpackChunkName: "about" */ '../views/CustomersView.vue')
  },
  {
    path: '/projects/:id',
    name: 'projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProjectsView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router
