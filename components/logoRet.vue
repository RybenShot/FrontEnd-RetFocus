<template>
  <div class="block">
    <footer id="footer">
      <div id="head" class="columns is-mobile">
        <!-- Boton de la izquierda -->
        <div class="column" id="box-left-buttom">
          <b-button
            class="is-rounded"
            id="iconsLogo"
            tag="router-link"
            :to="{ path: '/noticias' }"
          >
            <figure class="image is-32x32">
              <img src="https://i.ibb.co/xJzpY77/icono-Noticias-1.png" />
            </figure>
          </b-button>
        </div>

        <!-- Logo RetFocus -->
        <div class="columns">
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

        <!-- Boton de nuevoPost -->
        <div class="column" id="box-buttom">
          <b-button
            class="is-rounded"
            id="iconsLogo"
            tag="router-link"
            :to="{ path: '/post-video' }"
            type=""
          >
            <figure class="image is-24x24">
              <img src="https://i.ibb.co/DKMghpg/istockphoto-611312994-170667a.png"/>
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

#iconsLogo {
  padding-right: 5px;
  padding-left: 5px;
}

#imgLogo {
  padding-left: 33px;
  padding-right: 33px;
  padding-top: 14px;
}

#box-buttom {
  padding-right: 24px;
  padding-top: 20px;
}

#box-left-buttom {
  padding-left: 24px;
  padding-top: 20px;
}

#footer {
  width: 100%;
  height: 100%;
  height: 60px;
  top: 0px;
}
</style>
