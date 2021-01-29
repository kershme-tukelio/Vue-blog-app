import Vue from 'vue'
import VueRouter from 'vue-router'
import AppPosts from '../views/AppPosts.vue'
import SinglePost from '../views/SinglePost.vue'
// import postsService from '../services/PostsService.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
