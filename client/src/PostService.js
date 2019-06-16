import axios from 'axios';
const url = 'http://localhost:5000/api/post';
class PostService {
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                )
            } catch (err) {
                reject(err);
            }
        })
    }
    // creat  post
    static insertPost(text) {
        return axios.post(url, {
            text
        });
    }
    //delete  post
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}
export default PostService;