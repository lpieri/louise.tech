import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import meep from '@/pages/meep'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/meep',
      name: 'Meep',
      component: meep
    }
  ],
  mode: 'history'
});
