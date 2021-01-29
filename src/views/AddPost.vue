<template>
    <div>
        <form @submit.prevent="onSubmit" >
            <label for="title">Title: </label> <br/>
            <input required :minlength="2" v-model="formData.title" name="title" type="text" id="title" > <br/><br/>
            <label for="text">Text: </label> <br/>
            <textarea required :maxlength="300" name="text" v-model="formData.text" id="text" cols="30" rows="10"></textarea> <br/><br/>
            <button type="reset">Reset form</button>
            <button type="submit"> Submit </button>
        </form>
    </div>
</template>

<script>
import postsService from '../services/PostsService.js'

export default {
    name: 'AddPost',
    data() {
        return {
            formData: {
                title: '',
                text: ''
            }
        }
    },
    methods: {
        async onSubmit(){
            await postsService.addPost(this.formData)
            this.$router.push('/posts');
        }
    }
}
</script>

<style>

</style>
