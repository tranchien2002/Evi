import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/HomePage';

Vue.use(Router);

export const router = new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout-home',
      component: HomePage
    }
  ]
});
