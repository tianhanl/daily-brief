import Vue from 'vue';
import Router from 'vue-router';
import Brief from './components/Brief.vue';
import Account from './components/Account.vue';

Vue.use(Router);

const router = new Router({
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
  let authFile = false;
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