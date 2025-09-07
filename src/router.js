import { createRouter, createWebHashHistory } from 'vue-router';
import Brief from './components/Brief.vue';
import Account from './components/Account.vue';
import http from './http';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'brief',
    component: Brief,
    meta: {
      requireAuth: true
    }
  }, {
    path: '/account',
    name: 'account',
    component: Account
  }]
});

router.beforeEach(function (to, from, next) {
  let authFile = http.getCredential();
  if (to.meta.requireAuth) {
    if (authFile) {
      next();
    } else {
      next({
        path: '/account'
      });
    }
  } else {
    next();
  }
});

export default router;
