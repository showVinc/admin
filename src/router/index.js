import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/pages/Index'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
