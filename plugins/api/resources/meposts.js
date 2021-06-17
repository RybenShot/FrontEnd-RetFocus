class mePost{
    constructor(axios){
        this.axios = axios
    }
  async listUserPosts() {
    try {
        const response = await this.axios.get("me/posts");
        return response.data
    } catch (error) {
        throw error
    }
  }
}

export default mePost
