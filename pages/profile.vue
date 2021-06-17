<template>
  <section>
    <div class="container">
      <!-- Todos los datos del usuario -->
      <div class="columns is-mobile" style="padding-top: 35px">
        <!-- Imagen del Usuario -->
        <div class="column">
          <div class="column" id="imgProfile">
            <figure class="image">
              <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
              <lottie-player
                class="is-rounded"
                src="https://assets9.lottiefiles.com/private_files/lf30_qunyZE.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              />
            </figure>
          </div>
        </div>
          <!-- Datos del usuario -->
        <div class="column" id="DataUser">
          <p class="title is-4 has-text-centered" id="nickname">@{{ currentUser.nickname }}</p>
          <p class="subtitle is-7 has-text-centered" id="email">{{ currentUser.email }}</p>
          <div id="logoutbox">
            <b-button
              class="has-text-centered"
              type="is-danger"
              size="is-small"
            >
              <a id="logout" href="#" @click="logout">Logout</a></b-button>
          </div>
        </div>
      </div>

      <hr />

      <div >
        <figure>
          <userPost v-for="item in posts" :value="item" :key="item._id" />
        </figure>
      </div>
      <br class="mb-6">

    </div>
  </section>
</template>

<script>
import userPost from "@/components/partials/userPost";
export default {
  components: {
    userPost,
  },
  name: "profile",
  layout: "retfocus",
  middleware: "authenticated",
  data() {},

  async asyncData({ app }) {
    try {
      const posts = await app.$api.meposts.listUserPosts();

      return { posts };
    } catch (error) {
      console.log(error);
    }
  },

  computed: {
    userToken() {
      return this.$store.getters.token;
    },

    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  methods: {
    logout() {
      this.$buefy.dialog.confirm({
        title: "Logout",
        message: "Seguro que quieres irte de esta maravillosa aplicacion?",
        confirmText: "Si, quiero irme",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => {
          this.$buefy.toast.open("Hasta pronto!");
          this.$store.dispatch("logout");
          this.$router.push("/");
        },
      });
    },
  },
};
</script>

<style>
hr {
  margin: 5px 20px;
}
#imgProfile {
  padding-bottom: 0px;
  padding-left: 40px;
  padding-right: 0px;
  width: 150px;
}
#email {
  margin-bottom: 5px;
}
#logout {
  color: white;
}
#logoutbox {
  margin-left: 60px;
}
#DataUser {
  padding-top: 40px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 30px;
}
</style>
