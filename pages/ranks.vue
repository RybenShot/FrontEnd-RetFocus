<template>
  <div class="" id="ranks">
    <!-- Enlace a el componente de los post -->
    <figure id="videoYoutube">
      <AlluserPost v-for="item in posts" :value="item" :key="item._id" />
    </figure>

    <br class="mb-2">
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
  margin-bottom: 25px;
}
.card-content {
  padding-bottom: 5px;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
