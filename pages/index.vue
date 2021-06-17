<template>
  <div class="columns is-mobile alcentro">
    <div class="column is-three-fifths is-offset-one-fifth mt-6" id="indexcenter">
      <!-- logo -->
    <figure><img src="../assets/buefy.png"/></figure>
    <!-- Boton login -->
    <b-button active expanded tag="router-link" :to="{ path: '/login' }"><strong> Login </strong></b-button>
    <!-- No tienes cuenta? -->
    <div class="columns is-mobile">
      <div class="column"><h4>Don't have an account?</h4></div>
      <div class="column"><b-button class="bd-notification" type="is-dark" tag="router-link" :to="{ path: '/register' }">Register</b-button></div>
    </div>
  </div>
  </div>
</template>

<script>
export default {};
name:"Index"
</script>

<style >
.alcentro{
height: 700px;
}
#indexcenter{
  padding-top: 190px;
}
</style>
