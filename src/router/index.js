import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Photos from '../components/Photos'
import Testimonials from '../components/Testimonials'

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
      path: '/photos/',
      name: 'Photos',
      component: Photos
    },
    {
      path: '/testimonials/',
      name: 'Testimonials',
      component: Testimonials
    }
  ]
})
