import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Products from '../components/Products'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about/',
      name: 'About',
      component: About
    },
    {
      path: '/contact/',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/products/',
      name: 'Products',
      component: Products
    }
  ]
})
