<template>
  <div class="space-Cards">
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
    <div class="card">
      <div class="card-content">
        <div class="columns is-mobile">
          <!-- <div class="column is-one-quarter">
            <figure class="image is-48x48">
              <img
                class="is-rounded"
                src="https://bulma.io/images/placeholders/128x128.png"
              />
            </figure>
          </div> -->
          <div class="column">
            <p class="title is-6" style="padding-bottom: 5px">{{value.title}}</p>
            <p class="subtitle is-7">{{value.description}}</p>
            <p class="subtitle is-7">ID de usuario :{{value.author}}</p>

          </div>
          <!-- <div class="column"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlluserPost",
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
      /* padding-left: 30px; */
    padding-top: 15px;
}
</style>
