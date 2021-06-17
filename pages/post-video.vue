<template>
  <div class="container is-max-desktop">
    <div class="notification is-success" id="formpost">
      <div style="padding-left: 45px;">
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      <lottie-player
        src="https://assets4.lottiefiles.com/packages/lf20_qm8eqzse.json"
        background="transparent"
        speed="1"
        style="width: 200px; height: 200px"
        loop
        autoplay
      ></lottie-player>
</div>

      <b-field label="Titulo">
        <b-input
          type="text"
          placeholder="Titulo del video..."
          v-model="postData.title"
        ></b-input>
      </b-field>

      <b-field label="Enlace de video">
        <b-input
          type="text"
          placeholder="ID del video de youtube"
          v-model="postData.url"
        ></b-input>
      </b-field>

      <b-field label="Resume">
        <b-input
          type="text"
          placeholder="Pequeño resumen del corto"
          v-model="postData.description"
        ></b-input>
      </b-field>

      <!-- <b-field label="Miniatura">
        <b-input
          type="text"
          placeholder="Aqui vendra la subida de imagen"
          v-model="postData.image"
        ></b-input>
      </b-field> -->

      <!-- <b-field label="Categoría">
        <b-input
          type="text"
          placeholder="Esta parte irá con botones..."
          v-model="postData.tag"
        ></b-input>
      </b-field> -->

      <b-field>
        <p>Pulsa para enviar el post</p>
        <b-button type="is-warning" expanded @click="newPost">Enviar</b-button>
      </b-field>
    </div>
  </div>
</template>

<script>
export default {
  name: "post",
  layout: "retfocus",
  middleware: "authenticated",

  data() {
    return {
      postData: {
        title: "",
        url: "",
        description: "",
        image: "",
        tag: "",
      },
    };
  },
  methods: {
    async newPost() {
      try {
        // volvemos a capturar las variables que vamos a registrar. Nose paque ...
        const newPostData = {
          title: this.postData.title,
          url: this.postData.url,
          description: this.postData.description,
          image: this.postData.image,
          tag: this.postData.tag,
        };
        // Y lo enviamos al plugin a traves de $api con el "register" y con los datos que enviamos
        await this.$api.posts.registerPost(
          newPostData,
          this.$store.getters.token
        );

        console.log("Post Subido con exito! espero ...");

        this.$router.push("/profile"); //Redireccion a intro
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
#formpost {
  margin: 15px;
  margin-top: 50px;
}
</style>
