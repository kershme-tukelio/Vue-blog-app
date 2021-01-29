<template>
    <div>
        <ul v-for="post in posts" :key="post.id" >
            <li>
                {{post.title}}<br/>
                <router-link :to="{ name: `SinglePost`, params: {id: post.id}}" > View post </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import postsService from '../services/PostsService.js'

export default {
    data() {
        return {
            posts: []
        }
    },
    async created(){
        this.posts = await postsService.getAll();
    }
}
</script>

<style>

</style>
