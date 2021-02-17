<template>
  <section class="particles full-height">
    <div class="card overlay card-index">
      <figure class="image is-square">
        <img src="../../assets/logo-2.png" alt="logo" id="logo"/>
      </figure>
      <h3 class="title is-4">Développeuse Freelance</h3>
    </div>

    <div class="card arrow-pos arrow-index">
      <figure class="image is-square">
        <img src="../../assets/arrow-down.png" alt="arrow down direction" id="arrow-down"/>
      </figure>
    </div>
    <vue-particles color="#E0CBF0" linesColor="#E0CBF0" shapeType="circle" class="full-height" :moveSpeed="1.5" :click-effect="false" :hoverEffect="false"></vue-particles>
  </section>
</template>

<script>
    export default {
        name: "sectionParticales"
    }
</script>

<style scoped>
@media only screen and (min-height: 375px) and (max-width: 823px) {
  .card-index {
    padding: 21px;
    min-width: 21vh;
    max-height: 42vh;
    max-width: 42vh;
    margin: -18vh 0 0 -19vh;
  }

  .arrow-index {
    padding: 18px;
    min-width: 6vh;
    max-height: 6vh;
    max-width: 6vh;
    margin: -10.5vh 0 0 -4.5vh;
  }
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .card-index {
    padding: 21px;
    min-width: 21vh;
    max-height: 42vh;
    max-width: 42vh;
    margin: -18vh 0 0 -19vh;
  }

  .arrow-index {
    padding: 18px;
    min-width: 6vh;
    max-height: 6vh;
    max-width: 6vh;
    margin: -10.5vh 0 0 -4vh;
  }
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .card-index {
    padding: 21px;
    min-width: 21vh;
    max-height: 42vh;
    max-width: 42vh;
    margin: -18vh 0 0 -15vh;
  }

  .arrow-index {
    padding: 18px;
    min-width: 6vh;
    max-height: 6vh;
    max-width: 6vh;
    margin: -10.5vh 0 0 -4.5vh;
  }
}

@media (min-width: 1281px) and (orientation: landscape){
  .card-index {
    padding: 21px;
    min-width: 21vh;
    max-height: 42vh;
    max-width: 42vh;
    margin: -18vh 0 0 -16vh;
  }

  .arrow-index {
    padding: 18px;
    min-width: 6vh;
    max-height: 6vh;
    max-width: 6vh;
    margin: -10.5vh 0 0 -4.5vh;
  }
}
</style>
