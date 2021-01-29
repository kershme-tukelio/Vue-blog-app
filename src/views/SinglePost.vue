<template>
    <div>
        <h1>{{post.title}}</h1>
        <p>{{post.text}}</p>
    </div>
</template>

<script>
import postsService from '../services/PostsService.js'
export default {
    name: 'SinglePost',
    async created() {
        const postId = this.$route.params.id;
        this.post = await postsService.getPostById(postId);
    },
    data() {
        return {
            post: {}
        }
    }
}
</script>

<style>

</style>
