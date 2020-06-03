<template>
  <section class="particles full-height">
    <div class="card overlay card-index">
      <figure class="image is-square">
        <img src="../../assets/logo.png" alt="logo" id="logo"/>
      </figure>
    </div>

    <a href="#Projects">
      <div class="card arrow-pos arrow-index">
        <figure class="image is-square">
          <img src="../../assets/arrow-down.png" alt="arrow down direction" id="arrow-down"/>
        </figure>
      </div>
    </a>
    <vue-particles color="#E0CBF0" linesColor="#E0CBF0" shapeType="circle" class="full-height" :moveSpeed="1.5" :click-effect="false" :hoverEffect="false"></vue-particles>
  </section>
</template>

<script>
    export default {
        name: "sectionParticales"
    }
</script>

<style scoped>
  .card-index {
    padding: 21px;
    min-width: 21vh;
    max-height: 42vh;
    max-width: 42vh;
    margin: -10.5vh 0 0 -10.5vh;
  }
  .arrow-index {
    padding: 18px;
    min-width: 6vh;
    max-height: 6vh;
    max-width: 6vh;
    margin: -10.5vh 0 0 -10.5vh;
  }
</style>
