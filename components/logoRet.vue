<template>
  <div class="block">
    <footer id="footer">
      <div id="head" class="columns is-mobile">

        <div class="column">
          <b-button class="is-rounded" id="iconsLogo" tag="router-link" :to="{ path: '/noticias' }">
            <figure class="image is-32x32">
              <img src="https://i.ibb.co/xJzpY77/icono-Noticias-1.png" />
            </figure>
          </b-button>
        </div>

        <div class="columns ">
          <div id="logo">
            <figure class="image">
              <img
                src="https://i.ibb.co/ZfGwk9c/buefy.png"
                alt="buefy"
                border="0"
                id="imgLogo"
              />
            </figure>
          </div>
        </div>

        <div class="column">
          <b-button class="is-rounded" id="iconsLogo" tag="router-link" :to="{ path: '/post-video' }" type="">
            <figure class="image is-32x32">
              <img src="https://i.ibb.co/xJzpY77/icono-Noticias-1.png" />
            </figure>
          </b-button>
        </div>

      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "logoRet",
};
</script>

<style>
#head {
  height: 60px;
}

#iconsLogo{
  padding-right: 5px;
    padding-left: 5px;
}

#imgLogo{
  padding-left: 33px;
    padding-right: 33px;
    padding-top: 7px;
}


#footer {
  width: 100%;
  height: 100%;

    height: 60px;
    top: 0px;

  /* bottom: 0; */
}
</style>
