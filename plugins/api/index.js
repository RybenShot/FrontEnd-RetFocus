import axios from 'axios'
import Auth from './resources/auth'
import User from './resources/users'
import Post from './resources/posts'
import mePost from './resources/meposts'

export default (context, inject) => {
  axios.defaults.baseURL = context.env.baseURL //Coge la url de la api desde aqui en "nuxt.config"
  inject('api', {
    auth: new Auth(axios),
    users: new User(axios),
    posts: new Post(axios),
    meposts: new mePost(axios),
    initSession(token = null) {
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      }
    },
    closeSession() {
      axios.defaults.headers.common['Authorization'] = ''
    }
  })
}
