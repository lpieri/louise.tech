import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import meep from '@/pages/meep'
import NotFoundComponent from '@/components/error404'
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
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ],
  mode: 'history'
});
