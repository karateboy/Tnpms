import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: '首頁',
        breadcrumb: [],
      },
    },
    {
      path: '/smart-grid',
      name: 'smart-grid',
      component: () => import('@/views/SmartGrid.vue'),
      meta: {
        pageTitle: '智能電網',
        breadcrumb: [],
      },
    },
    {
      path: '/neoenergy',
      name: 'neoenergy',
      component: () => import('@/views/Neoenergy.vue'),
      meta: {
        pageTitle: '再生能源',
        breadcrumb: [],
      },
    },
    {
      path: '/energy-saving',
      name: 'energy-saving',
      component: () => import('@/views/EnergySaving.vue'),
      meta: {
        pageTitle: '節電成效',
        breadcrumb: [],
      },
    },
    {
      path: '/requirement-adjust',
      name: 'requirement-adjust',
      component: () => import('@/views/RequirementAdjust.vue'),
      meta: {
        pageTitle: '需量調控',
        breadcrumb: [],
      },
    },
    {
      path: '/links',
      name: 'links',
      component: () => import('@/views/Links.vue'),
      meta: {
        pageTitle: '友善連結',
        breadcrumb: [],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
});

export default router;
