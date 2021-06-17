import jwtDecode from 'jwt-decode'

export const state = () => ({
  cart: [],
  token: null,
  user: null,
  nickname: null
})

export const mutations = {
  saveToken(state, token = null) {
    state.token = token

    if (token) {
      state.user = jwtDecode(token)
      state.nickname = jwtDecode(token)
    }

    if (!token) {
      state.user = null
    }
  }
}

export const actions = {
  nuxtServerInit(ctx, { app }) {
    const cookieToken = app.$cookies.get('jwt-token')

    if (cookieToken) {
      //iniciar el store con la sesión el usuario
      ctx.dispatch('login', cookieToken)
    }
  },

  login(context, token) {

    console.log(token)

    if (token === '' || token === undefined) {
      token = null
    }

    if (token) {
      this.$cookies.set('jwt-token', token)

      this.$api.initSession(token)
    }
    context.commit('saveToken', token)
  },
  logout(context) {
    this.$cookies.remove('jwt-token')

    this.$api.closeSession()

    context.commit('saveToken')
  }
}

export const getters = {
  isAuth(state) {
    return state.token !== null
  },
  token(state) {
    return state.token
  },
  currentUser(state) {
    return state.user
  },
}
