import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../Pages/core/PageLogin.vue'
import Home from '../Pages/Home.vue'
import ForgotPassword from '../Pages/core/ForgotPassword.vue';

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/ForgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      allowAnonymous: true
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
