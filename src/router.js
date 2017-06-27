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

export default router;