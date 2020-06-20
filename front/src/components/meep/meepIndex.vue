<template>
  <section class="full-height meep-sky">
    <div class="card overlay card-meep">
      <figure class="image">
        <img src="../../assets/meep-logo.png" alt="Meep game logo" id="logo"/>
      </figure>
    </div>

    <div class="card meep-soon-pos meep-soon">
      <figure class="image is-24x24">
        <img src="../../assets/apple-logo.png" alt="Apple logo"/>
      </figure>
      <h5 id="meep-availability" class="title is-4">Coming soon</h5>
    </div>
  </section>
</template>

<script>
    export default {
        name: "meepIndex"
    }
</script>

<style scoped>
  .card-meep {
    padding: 21px;
    min-width: 84vh;
    max-width: 105vh;
    margin: -21vh 0 0 -40vh;
  }

  #meep-availability {
    margin-left: 0.7vh;
  }

  .meep-soon {
    display: flex;
    align-items: center;
    justify-content: center !important;
    padding: 18px;
    min-width: 23vh;
    max-height: 6vh;
    max-width: 23vh;
    margin: -8vh 0 0 -12vh;
  }

  .meep-sky {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url("../../assets/meep-background.png");
  }
</style>s
