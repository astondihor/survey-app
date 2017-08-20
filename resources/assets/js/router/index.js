import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Feature from '../pages/Feature'
import Pricing from '../pages/Pricing'
import Templates from '../pages/Templates'
import Gallery from '../pages/Gallery'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import SignIn from '../pages/SignIn'
import Hello from '../pages/Hello'

import Dashboard from '../pages/admin/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/feature',
      name: 'Feature',
      component: Feature
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing
    },
    {
      path: '/templates',
      name: 'Templates',
      component: Templates
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/contact-us',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard
    },
  ],
  linkActiveClass: 'active'
})
