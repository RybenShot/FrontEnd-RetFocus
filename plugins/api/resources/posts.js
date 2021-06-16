class Post{
    constructor(axios){
        this.axios = axios
    }

    async registerPost(postData, token){
        try {
          this.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

            const response = await this.axios.post("posts", postData)

            return response.data
        }catch(error){
            throw error
        }
    }
    async list() {
      try {
          const response = await this.axios.get("posts");
          return response.data
      } catch (error) {
          throw error
      }
  }

}

export default Post
