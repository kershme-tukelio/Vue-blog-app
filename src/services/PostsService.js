import http from './BaseService.js';

class PostsService {
    async getAll() {
        try {
            const response = await http.get('posts');
            return response.data;
        }
        catch(error) {
            console.log(error);
        }
    }
    async getPostById(id) {
        const response = await http.get(`posts/${id}`)
        return response.data
    }
}

const postsService = new PostsService();
export default postsService;