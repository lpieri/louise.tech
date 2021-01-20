<template>
  <section class="particles full-height">
    <div class="card overlay card-index">
      <figure class="image is-square">
        <img src="../../assets/logo-2.png" alt="logo" id="logo"/>
      </figure>
      <h1 class="title is-4">Développeuse Freelance</h1>
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
    margin: -18.6vh 0 0 -18.6vh;
  }
  .arrow-index {
    padding: 18px;
    min-width: 6vh;
    max-height: 6vh;
    max-width: 6vh;
    margin: -10.5vh 0 0 -10.5vh;
  }
</style>
