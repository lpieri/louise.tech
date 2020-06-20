<template>
<section class="particles full-height">

  <div class="card overlay card-index">
    <h1 class="title is-1 lato-title-black">ERROR 404</h1>
  </div>

  <vue-particles color="#E0CBF0" linesColor="#E0CBF0" shapeType="circle" class="full-height" :moveSpeed="1.5" :click-effect="false" :hoverEffect="false"></vue-particles>
</section>
</template>

<script>

  export default {
    name: 'notFoundComponemts',
  }
</script>

<style>
  .card-index {
    padding: 21px;
    min-width: 21vh;
    max-height: 21vh;
    max-width: 30vh;
    margin: -8vh 0 0 -12vh;
  }
</style>
