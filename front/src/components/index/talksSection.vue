<template>
    <section id="Talks" class="section">
      <div class="container">
        <div class="column">
          <h2 class="title is-2 lato-title-black">
            Articles, Talks, Trailers :
          </h2>
        </div>

        <flicking class="flicking flicking0" :options="{ gap: 21, circular: true}">
          <div class="panel card card-carousel">
            <div class="media is-center">
              <div class="media-content">
                <p class="title is-5 is-hidden-touch"><span class="title is-5 lato-title-black">Article:</span> Changing the world, one Swift playground at a time by Apple</p>
                <p class="title is-6 is-hidden-desktop"><span class="title is-6 lato-title-black">Article:</span> <a href="https://developer.apple.com/news/?id=aprhkd7d">Changing the world, one Swift playground at a time by Apple</a></p>
              </div>
            </div>
            <div class="content is-hidden-touch">
              <a href="https://developer.apple.com/news/?id=aprhkd7d">
                <img class="min-img" src="../../../static/swift-article.jpeg" />
              </a>
            </div>
          </div>

          <div class="panel card card-carousel">
            <div class="media">
              <div class="media-content">
                <p class="title is-5 is-hidden-touch"><span class="title is-5 lato-title-black">Article:</span> Avec Meep, Louise remporte le Swift Student Challenge (Apple) 2020 by 42</p>
                <p class="title is-6 is-hidden-desktop"><span class="title is-6 lato-title-black">Article:</span> <a href="https://www.42.fr/meep-swift-student-challenge-2020/">Avec Meep, Louise remporte le Swift Student Challenge (Apple) 2020 by 42</a></p>
              </div>
            </div>
            <div class="content is-hidden-touch">
              <a href="https://www.42.fr/meep-swift-student-challenge-2020/">
                <img class="min-img" src="../../assets/meep-logo.png" />
              </a>
            </div>
          </div>

          <div class="panel card card-carousel">
            <div class="media">
              <div class="media-content">
                <p class="title is-5 is-hidden-touch"><span class="title is-5 lato-title-black">Trailer:</span> Fall Girl</p>
                <p class="title is-6 is-hidden-desktop"><span class="title is-6 lato-title-black">Trailer:</span> <a href="https://youtu.be/9cey6-75uwg">Fall Girl</a></p>
              </div>
            </div>
            <div class="content is-hidden-touch">
              <iframe class="min-img" src="https://www.youtube.com/embed/9cey6-75uwg" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>

<!--          <div class="panel card card-carousel">-->
<!--            <div class="media">-->
<!--              <div class="media-content">-->
<!--                <p class="title is-4 is-desktop is-hidden-mobile"><span class="title is-4 lato-title-black">Talk:</span> Le P2P Learning</p>-->
<!--                <p class="title is-5 is-desktop is-hidden-fullhd"><span class="title is-5 lato-title-black">Talk:</span> Le P2P Learning</p>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="content is-hidden-mobile">-->
<!--              <iframe class="min-img" src="https://www.youtube.com/embed/UlxcGQmJc0E" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
<!--            </div>-->
<!--          </div>-->
        </flicking>
      </div>

    </section>
</template>

<script>
import { Flicking } from "@egjs/vue-flicking";

export default {
  name: "talksSection",
  components: {
    Flicking: Flicking,
  },
  plugins: []
}
</script>

<style scoped>
#Talks {
  background-color: hsl(0, 0%, 98%);
}

@media only screen and (max-width: 1023px) {
  .card-carousel {
    width: 31vw !important;
    height: 21vh !important;
    padding: 15px !important;
    margin: 5px 5px 5px 5px;
  }
}

@media only screen and (min-width: 1024px) {
  .card-carousel {
    width: 31vw !important;
    height: 45vh !important;
    padding: 15px !important;
    margin: 5px 5px 5px 5px;
  }

  .min-img {
    width: 29vw !important;
    height: 31vh !important;
  }
}

.flicking {
  height: 500px !important;
}
</style>
