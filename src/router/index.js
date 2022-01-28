import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const Manager = () => import('../views/Manager.vue')
const LoginPage = () => import('../views/LoginPage.vue')
const SignupPage = () => import('../views/SignupPage.vue')
const Details = () => import('../views/Details.vue')
const Edit = () => import('../views/Edit.vue')

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
