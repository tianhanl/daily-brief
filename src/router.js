import Vue from 'vue';
import Router from 'vue-router';
import Brief from './components/Brief.vue';

Vue.use(Router);

const router = new Router({
  routes: [{
    path: '/',
    name: 'Brief',
    component: Brief
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