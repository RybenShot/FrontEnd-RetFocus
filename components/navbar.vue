<template>

  <footer class="is-warning block" >
    <!-- Acciones -->

    <div class="columns is-mobile ">
      <!-- <div class="column mobile-modal">
        <b-button
          tag="router-link"
          :to="{ path: '/estrellas' }"
          type="is-warning"
          expanded
          >estrellas</b-button>
      </div> -->

      <div class="column">
        <b-button
          tag="router-link"
          :to="{ path: '/ranks' }"
          type="is-warning"
          expanded
          >Ranks</b-button>
      </div>

      <div class="column">
        <b-button
          tag="router-link"
          :to="{ path: '/profile' }"
          type="is-warning"
          expanded
          >Perfil</b-button>
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
#navbar{
  background-color: yellow ;
}

footer {
   position:fixed;
   left:0px;
   bottom:0px;
   /* height:40px; */
   width:100%;
   background-color: white;

}
</style>
