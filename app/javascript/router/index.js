import VueRouter from 'vue-router'
import Home from '../components/home'
import '../styles/application'

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      name: 'home',
      path: '/home',
      component: Home
    }
  ]
})
