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
}

const postsService = new PostsService();
export default postsService;