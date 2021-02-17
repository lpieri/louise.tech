<template>
    <section id="Swift-Student-Challenge" class="section">
      <div class="container">
        <div class="column">
          <h2 class="title is-2 lato-title-black">
            Swift Student Challenge 2020 Winner :
          </h2>
        </div>

        <div class="columns is-multiline is-centered">
          <div class="column is-full">
            <h3 class="subtitle is-3 lato-text-black">Le Swift Student Challenge est un challenge organisé par Apple dans le cadre de leur WWDC annuel.</h3>
          </div>

          <div class="column is-half">
            <router-link to="/meep">
              <figure class="image">
                <img src="../../assets/meep-logo.png" alt="Meep game logo" id="logo"/>
              </figure>
            </router-link>
          </div>

          <div class="column is-full">
            <h4 class="subtitle is-4 lato-text-black">Cette année j'ai participé en créant un jeu d'environ 3 mins.</h4>
            <h4 class="subtitle is-4 lato-text-black">Le jeu s'appel <router-link to="/meep">Meep</router-link>, c'est un jeu à deux niveaux: le premier est un niveau où tout est inversé, le second est un niveau où tout est normal.</h4>
            <h4 class="subtitle is-4 lato-text-black">L'histoire est celle d'un petit personnage transgenre bleu qui veut atteindre le niveau final et devenir rose.</h4>
            <h4 class="subtitle is-4 lato-text-black">Les deux univers du jeu, sont une métaphore qui représente la transition d'une personne transgenre.</h4>
          </div>
        </div>
      </div>

    </section>
</template>

<script>
export default {
  name: "sscSection"
}
</script>

<style scoped>
#Swift-Student-Challenge {
  background-color: hsl(0, 0%, 98%);
}

</style>
