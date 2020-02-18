<template>
    <section class="section">
      <div class="container">
        <div>
          <h2 class="title is-1 lato-title-pink">
            {{ data.title }}
          </h2>
        </div>

        <div class="columns is-multiline is-centered">
          <div class="column is-1" v-if="data.profilePicture">
            <figure class="image profile-picture">
              <img class="is-rounded" :src="data.profilePicture">
            </figure>
          </div>

          <div class="column is-12" v-if="data.textH3">
            <h3 class="title is-3 lato-text-black text-white-space">{{ data.textH3 }}</h3>
          </div>

          <div class="column is-12" v-if="data.textH4">
            <h4 class="title is-4 lato-text-black text-white-space">{{ data.textH4 }}</h4>
          </div>
        </div>

        <div class="column is-12" v-if="data.videoLink">
          <figure class="image is-16by9">
            <iframe class="has-ratio"  width="640" height="360" :src="data.videoLink" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </figure>

          <card :card-data="data.cards.card1"></card>
        </div>
      </div>
    </section>
</template>

<script>
import Card from "@/components/card"

export default {
  name: "templateSection",
  components: {
    Card
  },
  props: {
    data: null
  }
}
</script>

<style scoped>
.profile-picture {
  width: 15vw;
  height: auto;
  padding: 1vh 0 0 0;
}
</style>
