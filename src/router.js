import Router from 'vue-router';
import Brief from './components/Brief.vue';
import Account from './components/Account.vue';

Vue.use(Router);

const router = new Router({
  routes: [{
    path: '/',
    name: 'Brief',
    component: Brief,
    meta: {
      // user must be loged in to use application
      requireAuth: true
    }
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  }]
});

router.beforeEach(function (to, from, next) {
  let authFile = true;
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