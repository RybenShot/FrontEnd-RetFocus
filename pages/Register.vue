<template>
  <div class="columns is-mobile" style="height: 700px">
    <div class="column is-three-fifths is-offset-one-fifth mt-6 alcentro" >
      <!-- Logo -->
      <a href="/#"
        ><figure class="image"><img src="../assets/buefy.png" alt="" /></figure
      ></a>
      <!-- Formulario -->

      <div class="field">
        <input
          class="input"
          type="text"
          placeholder="Nombre"
          v-model="userData.name"
        />
      </div>

      <div class="field">
        <input
          class="input"
          type="email"
          placeholder="Email"
          v-model="userData.email"
        />
      </div>

      <div class="field">
        <input
          class="input"
          type="password"
          placeholder="Password"
          v-model="userData.password"
        />
      </div>

      <div class="field">
        <input
          class="input"
          type="text"
          placeholder="Nombre usuario"
          v-model="userData.nickName"
        />
      </div>

<!-- Subida de fotos pero no entiendo muy bien como funciona -->
      <!-- <b-field class="file">
      <b-upload v-model="file" expanded>
        <a class="button is-primary is-fullwidth">
          <b-icon icon="upload"></b-icon><span>{{file.name || "Foto de perfil"}}</span>
        </a>
      </b-upload>
    </b-field> -->

      <!-- Boton registro -->
      <b-button active expanded @click="newUser"
        ><strong> Registarse </strong></b-button
      >
      <!-- Reglas de usuario -->
      <div class="columns is-mobile">
        <div class="column">
          <h4 class="bd-notification is-info">Y a pasarlo bien!</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios"; LO COMENTO PORQUE CREO QUE AQUI NO SIRVE DE NADA
export default {
  name: "Register",
  data() {
    return {
      file:{},
      userData: {
        name: "",
        email: "",
        password: "",
        nickName: "",

      },
    };
  },
  methods: {
    async newUser() {
      try {
        // volvemos a capturar las variables que vamos a registrar. Nose paque ...
        const newUserData = {
          name: this.userData.name,
          email: this.userData.email,
          password: this.userData.password,
          nickName: this.userData.nickName,
        };
        // Y lo enviamos al plugin a traves de $api con el "register" y con los datos que enviamos
        await this.$api.users.register(newUserData);

        this.$router.push("/"); //Redireccion a intro
      } catch (error) {
        const response = error.response
        this.hasErrors = true
        this.errorMessage = response.data.message
      }
    },
  },
};
</script>

<style >
.alcentro{

    padding-top: 100px;


}

</style>

