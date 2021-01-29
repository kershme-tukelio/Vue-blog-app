import Vue from 'vue'
import VueRouter from 'vue-router'
import AppPosts from '../views/AppPosts.vue'
import SinglePost from '../views/SinglePost.vue'
import AddPost from '../views/AddPost.vue'

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
  },
  {
    path: '/posts/:id',
    name: 'SinglePost',
    component: SinglePost
  },
  {
    path: '/add',
    name: 'AddPost',
    component: AddPost 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
