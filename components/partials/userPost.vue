<template>
  <div class="space-Cards">
    <!-- Reproductor de Youtube -->
    <figure class="image is-5by3" id="reproYoutube">
      <iframe
        class="has-ratio"
        width="640"
        height="360"
        :src="`https://www.youtube.com/embed/${value.url}`"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </figure>
    <!-- Datos del post -->
    <div class="card">
      <div class="card-content">
        <div class="columns is-mobile">

          <div class="column">
            <p class="title is-4 has-text-centered" style="padding-bottom: 5px">{{value.title}}</p>
            <p class="subtitle is-7 has-text-centered">{{value.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userPost",
  props: {
    value: Object,
  },
};
</script>

<style>
.space-Cards{
      margin-bottom: 10px;
}
#reproYoutube {
  margin-bottom: 0px;
  margin-right: 0px;
  margin-left: 0px;
}
.card-content {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 0px;
  padding-right: 0px;
}
.container{
  padding-top: 15px;
}
</style>
