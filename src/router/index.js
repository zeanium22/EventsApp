import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Cats from '../views/Cats.vue'
import Account from '../views/Account.vue'
import Demo from '../views/Demo.vue'
import ElementPage from '../views/ElementPage.vue'
import Add from '../views/Add.vue'
import User from '../views/User.vue'
import Search from '../views/Search.vue'
import Tab from '../tab.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tab',
    component: Tab,
    redirect: '/home',
    children:[
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/add',
        name: 'Add',
        component: Add
      },
      {
        path: '/user',
        name: 'User',
        component: User
      },
      {
        path: '/search',
        name: 'Search',
        component: Search
      },
    ]
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/element',
    name: 'ElementPage',
    component: ElementPage
  },
  {
    path: '/cats',
    name: 'Cats',
    component: Cats
  }
]

const router = new VueRouter({
  routes
})

export default router
