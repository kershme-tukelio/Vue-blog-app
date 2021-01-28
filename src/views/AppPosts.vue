<template>
    <div>
        <ul v-for="post in posts" :key="post.id" >
            <li>
                <h3>{{post.title}}</h3>
                <p>{{post.text}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
// import postsService from '../services/PostsService.js'

export default {
    data() {
        return {
            posts: {
                id: 1,
                title: 'Title 1',
                text: 'Lorem Ipsum 1'
            }
        }
    }
}
</script>

<style>

</style>
