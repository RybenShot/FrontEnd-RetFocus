<template>
  <div class="content" id="ranks">
    <figure id="videoYoutube">
      <AlluserPost v-for="item in posts" :value="item" :key="item._id" />
    </figure>

    <div class="card">
      <div class="card-content">
        <div class="columns is-mobile">
          <div class="column is-one-quarter">
            <figure class="image is-48x48">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/128x128.png"
              />
            </figure>
          </div>
          <div class="column">
            <p class="title is-6">PepitoPerez</p>
            <p class="subtitle is-7">pepitoperez@hotmail.com</p>
          </div>
          <div class="column"></div>

        </div>
      </div>
    </div>

    <hr>
    <hr>

    <!-- <div class="columns is-mobile">
      <div class="column">
        <figure class="image is-48x48">
          <img
            class="is-rounded"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
        </figure>
      </div>

      <div class="media">
        <p class="title is-4" >PepitoPerez</p>
        <p class="subtitle is-6" >pepitoperez@hotmail.com</p>
      </div>

      <div class="column">
        <p>Retfocus</p>
      </div>
    </div> -->
  </div>
</template>

<script>
import AlluserPost from "@/components/partials/AlluserPost";

export default {
  layout: "retfocus",
  components: {
    AlluserPost,
  },
  middleware: "authenticated",
  data() {},
  async asyncData({ app }) {
    try {
      const posts = await app.$api.posts.list();

      return { posts };
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
#ranks {
  margin-top: 47px;
  border-bottom: 10px;
  height: 600px;
      padding-top: 10px;
}
#videoYoutube {
  margin-bottom: 5px;
}
.card-content {
  padding-bottom: 5px;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
