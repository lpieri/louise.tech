<template>
    <section id="Talks" class="section">
      <div class="container">
        <div class="column">
          <h2 class="title is-2 lato-title-black">
            Articles, Talks, Trailers :
          </h2>
        </div>

        <flicking class="flicking flicking0" :options="{ gap: 21, circular: true}">
          <div class="panel card card-project">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Article: Changing the world</p>
              </div>
            </div>
            <div class="content">
              <a href="https://developer.apple.com/news/?id=aprhkd7d">
                <img width="560" height="315" src="../../../static/swift-article.jpeg" />
              </a>
            </div>
          </div>
          <div class="panel card card-project">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Trailer: Fall Girl</p>
              </div>
            </div>
            <div class="content">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/9cey6-75uwg" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div class="panel card card-project">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Talk: Le P2P Learning</p>
              </div>
            </div>
            <div class="content">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/UlxcGQmJc0E" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </flicking>
      </div>

    </section>
</template>

<script>
import { Flicking } from "@egjs/vue-flicking";
// import { Fade } from "@egjs/flicking-plugins";

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

.player-center {
  display: flex !important;
  justify-content: center;
}

.card-project {
  padding: 15px !important;
  margin: 5px 5px 5px 5px;
}

.flicking {
  height: 500px !important;
}
</style>
