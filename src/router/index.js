import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Manager from '../views/Manager.vue'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'
import Details from '../views/Details.vue'
import Edit from '../views/Edit.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/manager',
    name: 'Manager',
    component: Manager
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'SignupPage',
    component: SignupPage
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
