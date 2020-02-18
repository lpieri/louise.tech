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
            <figure class="image is-128x128">
              <img class="is-rounded" :src="data.profilePicture">
            </figure>
          </div>

          <div class="column is-12" v-if="data.textH3">
            <h3 class="title is-3 lato-text-black">
              {{ data.textH3 }}
            </h3>
          </div>

          <div class="column is-12" v-if="data.textH4">
            <h4 class="title is-4 lato-text-black">
              {{ data.textH4 }}
            </h4>
          </div>
        </div>
      </div>

    </section>
</template>

<script>
export default {
  name: "templateSection",
  props: {
    data: null
  }
}
</script>

<style scoped>

</style>
