<template>
  <div id="container-AllStar">
    <section class="hero is-small is-info">
      <div class="hero-body">
        <div style="padding-left: 60px;">
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player
          src="https://assets8.lottiefiles.com/temp/lf20_CwlzoW.json"
          background="transparent"
          speed="1"
          style="width: 200px; height: 200px padding-left: 30px;"
          loop
          autoplay
        ></lottie-player>
        </div>
        <p class="title has-text-centered">En proceso</p>
        <p class="subtitle is-6 has-text-centered">Aqui tienes un pequeño ejemplo ...</p>
      </div>
    </section>

    <div class="card">
      <div id="postStar">
        <div class="card-image">
          <figure class="image is-5by3">
            <iframe
              class="has-ratio"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/kKV_xQ1ZIP4"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://ca.slack-edge.com/T0CJMEN31-U0CJR5ZM0-ge23e2c447e8-512"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Fernando Lopez</p>
              <p class="subtitle is-6">@fernandito</p>
            </div>
          </div>

          <div class="content">
            Aqui iria el resumen del cortometraje que habra puesto previamente a
            la hora de subir el post
            <br />

            <p class="title is-4">
              <img
                style="width: 30px"
                src="https://i.ibb.co/p0wPh1s/pngtree-home-vector-icon-png-image-4236634.png"
                alt=""
              />21-27 Jan 2016
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "estrellas",
  layout: "retfocus",
};
</script>

<style>
#postStar {
  margin-top: 15px;
}

#reproYoutube {
  margin-bottom: 0px;
  margin-right: 0px;
  margin-left: 0px;
}

#container-AllStar {
  margin-top: 60px;
  padding-bottom: 20px;
}
</style>
