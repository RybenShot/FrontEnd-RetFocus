<template>
  <div id="container-AllStar">
    <!-- Parte de Hero -->
    <section class="hero is-small is-danger">
      <div class="hero-body">
        <div style="padding-left: 60px">
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_1vhutqov.json"
            background="transparent"
            speed="1"
            style="width: 200px; height: 200px padding-left: 30px;"
            loop
            autoplay
          ></lottie-player>
        </div>
        <p class="title has-text-centered">En proceso</p>
        <p class="subtitle is-6 has-text-centered">
          Aqui tienes un pequeño ejemplo ...
        </p>
      </div>
    </section>
    <!-- Demo de card noticia -->
    <div class="box container">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src="https://i.ibb.co/9mXPnnX/selina-baso.jpg" alt="Image" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p><strong>Administrador</strong><br />El proximo ranks sera con las categorias "Drama" "comedia""ciencia Ficcion"</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "noticias",
  layout: "retfocus",
};
</script>

<style>
#container-AllStar {
  margin-top: 60px;
  padding-bottom: 20px;
}
</style>
