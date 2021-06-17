<template>
  <div class="container is-widescreen">
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
};
</script>

<style>
</style>
