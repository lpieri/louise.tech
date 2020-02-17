<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from './components/navBar'
import Footer from './components/footer'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
/*@font-face {*/
  /*font-family: 'Lato Light';*/
  /*font-style: normal;*/
  /*font-weight: normal;*/
  /*src: url('assets/fonts/Lato/Lato-Light.ttf') format('tff');*/
/*}*/

/*@font-face {*/
  /*font-family: 'Lato Light Italic';*/
  /*font-style: normal;*/
  /*font-weight: normal;*/
  /*src: url('assets/fonts/Lato/Lato-LightItalic.ttf') format('tff');*/
/*}*/

/*@font-face {*/
  /*font-family: 'Lato Regula';*/
  /*font-style: normal;*/
  /*font-weight: normal;*/
  /*src: url('assets/fonts/Lato/Lato-Regular.ttf') format('tff');*/
/*}*/

/*@font-face {*/
  /*font-family: 'Etna';*/
  /*font-style: normal;*/
  /*font-weight: normal;*/
  /*src: url('assets/fonts/etna-free-font.otf') format('otf');*/
/*}*/

body {
  scrollbar-width: none;
}

body::-webkit-scrollbar {
  display: none;
}
</style>
