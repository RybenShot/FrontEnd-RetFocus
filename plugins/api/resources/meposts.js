class mePost{
    constructor(axios){
        this.axios = axios
    }

  async listUserPosts() {
    try {
        // console.log("LIST",  this.axios.defaults)
        const response = await this.axios.get("me/posts");
        return response.data
    } catch (error) {
        throw error
    }
  }
}

export default mePost
