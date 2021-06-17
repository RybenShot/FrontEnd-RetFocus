<template>
  <footer class="block" id="bgNavbar">
    <div class="columns is-gapless is-mobile">
      <!-- Boton izquierdo -->
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
      <!-- Boton central -->
      <div class="column">
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
      <!-- Boton derecho -->
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
          </b-button>
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
