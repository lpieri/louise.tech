<template>
  <section class="particles full-height">
    <div class="card overlay card-index">
      <figure class="image is-square">
        <img src="../../assets/logo-2.png" alt="logo" id="logo"/>
      </figure>
      <h3 class="title is-4">Développeuse Freelance</h3>
    </div>
    <img src="../../assets/backgroung.png" alt="background" class="full-height full-">
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
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .card-index {
    padding: 21px;
    min-width: 21vh;
    max-height: 42vh;
    max-width: 42vh;
    margin: -18vh 0 0 -19vh;
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
}

@media (min-width: 1281px) and (orientation: landscape){
  .card-index {
    padding: 21px;
    min-width: 21vh;
    max-height: 42vh;
    max-width: 42vh;
    margin: -18vh 0 0 -16vh;
  }
}
</style>
