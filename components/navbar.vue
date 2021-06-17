<template>
  <footer class="block" id="bgNavbar">
    <!-- Acciones -->

    <div class="columns is-gapless is-mobile">

      <div class="column mobile-modal">

        <b-button
        id="buttoms-navbar"
          tag="router-link"
          :to="{ path: '/estrellas' }"
          style="background-color: #82828200"
          expanded
          >
          <div class="comuns">
            <img id="icons" src="https://i.ibb.co/p0wPh1s/pngtree-home-vector-icon-png-image-4236634.png"/>
          </div>
          </b-button>
      </div>

      <div class="column">
        <!-- <figure class="image is-128x128">
          <img src="https://i.ibb.co/PG3pr58/pngtree-home-vector-icon-png-image-4236634.jpg" />
        </figure> -->

        <!-- <a href="https://ibb.co/60Vhy45"><img src="https://i.ibb.co/PG3pr58/pngtree-home-vector-icon-png-image-4236634.jpg" alt="pngtree-home-vector-icon-png-image-4236634" border="0"></a> -->

        <b-button
          id="buttoms-navbar"
          tag="router-link"
          :to="{ path: '/ranks' }"
          style="background-color: #82828200"
          expanded
        >
          <div class="comuns">
            <img id="icons" src="https://i.ibb.co/BKhBGz6/home.png"/>
          </div>
        </b-button>
      </div>

      <div class="column">
        <b-button
          id="buttoms-navbar"
          tag="router-link"
          :to="{ path: '/profile' }"
          style="background-color: #82828200"
          expanded
          >
          <div class="comuns">
            <img id="icons" src="https://i.ibb.co/wywx4Qw/perfil.png"/>
          </div>
          </b-button

        >
        <!-- <a href="https://ibb.co/D48SQM8"><img src="https://i.ibb.co/wywx4Qw/perfil.png" alt="perfil" border="0"></a> -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>
#navbar {
  background-color: yellow;
}

#icons {
  width: 30px;
  padding-top: 5px;
}

#bgNavbar {
  background-color: #828282a6;
}

#buttoms-navbar {
  border: 0px;
}

footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  /* height:40px; */
  width: 100%;
  background-color: white;
}
</style>
