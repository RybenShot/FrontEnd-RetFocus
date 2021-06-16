<template>
  <div class="is-widescreen">


    <nuxt />
<logoRet />
    <navbar />
  </div>
</template>

<script>
import logoRet from "@/components/logoRet";
import navbar from "@/components/navbar";

export default {
  components: {
    navbar,
    logoRet,
  },
  // mounted() {
  //   const token = this.$cookies.get("jwt-token");
  //   this.$store.dispatch("login", token);
  // },
};
</script>

<style>
</style>
