<template>
    <section id="Talks" class="section">
      <div class="container">
        <div class="column">
          <h2 class="title is-2 lato-title-black">
            Talks :
          </h2>
        </div>

        <div class="columns is-centered">
          <div class="player-center column">
            <iframe width="840" height="472,5" src="https://www.youtube-nocookie.com/embed/UlxcGQmJc0E?controls=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>

    </section>
</template>

<script>
export default {
  name: "talksSection"
}
</script>

<style scoped>
.player-center {
  display: flex !important;
  justify-content: center;
}
</style>
