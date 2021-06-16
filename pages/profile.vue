<template>
  <section>
    <div class="container">
      <div class="columns is-mobile" style="padding-top: 35px">
        <!-- v-for="item in posts" :key="item._id" -->

        <div class="column " style="padding-right: 0px">
          <div class="column" id="imgProfile">
            <figure class="image">
              <img
                class="is-rounded"
                src="https://i.ibb.co/C1ZB9S3/72510466.jpg"
              />
            </figure>
          </div>
        </div>

        <div class="column" id="DataUser">
          <!-- <b-message title="Danger with icon" type="is-danger" has-icon aria-close-label="Close message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
        </b-message> -->

          <!-- Los datos del usuario los coge del token que tenga en el momento -->
          <p class="title is-4 has-text-centered" id="nickname">
            @{{ currentUser.nickname }}
          </p>
          <p class="subtitle is-7 has-text-centered" id="email">
            {{ currentUser.email }}
          </p>
          <!-- <b-button type="is-danger"><a href="#" @click="logout" >Logout</a></b-button> -->
          <div id="logoutbox" >
            <b-button
              class="has-text-centered"
              type="is-danger"
              size="is-small"
            >
              <a id="logout" href="#" @click="logout">Logout</a></b-button
            >
          </div>


        </div>

        <!-- <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div> -->

        <!-- Parte izquierda re estrellas -->
        <!-- <div class="ranks column">
          <figure class="image is-64x64">
            <img src="https://i.ibb.co/9rCNpWZ/Sin-t-tulo-1.png" />
          </figure>
        </div> -->
      </div>

      <hr />

      <div class="content">
        <figure>
          <userPost v-for="item in posts" :value="item" :key="item._id" />
        </figure>
      </div>
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
  // props: {
  //   posts: {
  //     type: Array,
  //     default: () => {
  //       return []
  //     }
  //   }
  // },
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
    // comento esta parte porque creo que no la necesito
    // isAuth() {
    //   return this.$store.getters.isAuth;
    // },
    currentUser() {
      return this.$store.getters.currentUser;
    },

    // filteredPosts() {
    //   // traigo los datos del usuario
    //   let userId = this.$store.getters.token
    //   // Si la id del usuario es null, devuelvo todos los posts
    //   if (userId === null) return this.Userposts;

    //   return this.posts.filter(
    //     (item) => item.id === this.userId
    //   );
    // },
  },
  methods: {
    // Me gustaria que la confirmacion FUNCIONARA DE VERDA pero bueno...
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
  padding-top:40px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 30px;
}
</style>
