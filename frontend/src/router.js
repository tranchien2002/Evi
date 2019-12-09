import Vue from 'vue';
import Router from 'vue-router';
import CommonLayout from '@/Layouts/CommonLayout';

Vue.use(Router);

export const router = new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout-common',
      component: CommonLayout,
      children: [
        {
          path: '/',
          name: 'homepage',
          component: () => import('./views/HomePage.vue')
        },
        {
          path: '/create',
          name: 'create-insurance',
          component: () => import('./views/CreateInsurance.vue')
        }
      ]
    }
  ]
});
