class User{
    constructor(axios){
        this.axios = axios
    }

    async register(userData){
        try {
            const response = await this.axios.post("users", userData)

            return response.data
        }catch(error){
            throw error
        }
    }

    async findById(userId){
      try {

          const response = await this.axios.get(`users/${userId}`);
          return response.data
      } catch (error) {
          throw error
      }

  }
}

export default User
