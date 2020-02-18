<template>
  <div class="container is-flex-tablet is-flex-mobile">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by5">
          <img id="img" class="portait" :src="cardData.preview" alt="Placeholder image">
        </figure>
        <button class="class-set-like">
          <font-awesome-icon icon="plus" color="red" size="2x" />
        </button>
      </div>


      <div>
        <div>
          <p class="title is-5 has-text-centered has-text-black lato-text-black">
            {{ cardData.title }}
          </p>
          <p class="subtitle is-6 has-text-centered has-text-black lato-text-black">{{ cardData.duration }} min</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardData: null
  },
  data () {
    return {
    }
  },
  methods: {
  },

}
</script>

<style scoped>
  #img {
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }

  .card {
    background: white;
    margin: 20px;
    max-width: 250px;
    min-width: 250px;
    max-height: 250px;
    min-height: 450px;
    border-radius: 20px;
    border: none;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  }

  .class-set-like {
    border-radius: 9999px;
    height: 60px;
    width: 60px;
    text-align: center;
    position: relative;
    top: -30px;
    left: 72px;
    border: none;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.2);
  }
</style>
