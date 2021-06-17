<template>
  <div class="columns is-mobile alcentrologin">
    <div class="column is-three-fifths is-offset-one-fifth mt-6" id="logincenter">
      <!-- Logo -->
      <a href="/#"><figure><img src="../assets/buefy.png"/></figure></a>
      <!-- Formulario -->
      <div class="field">
        <input class="input" type="email" placeholder="Email" v-model="email" />
      </div>

      <div class="field">
        <input class="input" type="password" placeholder="Password" v-model="password"/>
      </div>
      <!-- Boton de login -->
      <b-button active expanded class="mb-3" @click="login"><strong> Login </strong></b-button>
      <!-- No tienes cuenta? -->
      <div class="columns is-mobile">
        <div class="column">
          <h4>Don't have an account?</h4>
        </div>
        <div class="column">
          <b-button class="bd-notification" type="is-dark" tag="router-link" :to="{ path: '/register' }" >Register</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "yousebas29@hotmail.com",
      password: "12345qwert",
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$api.auth.login(this.email, this.password);
        // console.log(response)

        const token = response.token;

        this.$store.dispatch("login", token);
        // No guardo el token...

        console.info("te llevo a profile");
        this.$router.push("/profile");
      } catch (error) {
        console.log(error);
        alert("Usuario y/o contraseña incorrectos.");
      }
    },
  },
};
</script>

<style>
.alcentrologin {
  height: 700px;
}
#logincenter {
  padding-top: 140px;
}

</style>
