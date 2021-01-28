import Vue from 'vue'
import VueRouter from 'vue-router'
import AppPosts from '../views/AppPosts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/posts'
  },
  {
    path: '/posts',
    name: 'AppPosts',
    component: AppPosts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
