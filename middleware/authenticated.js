export default ({ store, redirect }) => {
    const isAuth = store.getters.isAuth
    console.info("Identificado:", isAuth)
    if (!isAuth) {
      return redirect('/login')
    }
  }
