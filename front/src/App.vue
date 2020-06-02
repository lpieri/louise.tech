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
body {
  scrollbar-width: none;
}

body::-webkit-scrollbar {
  display: none;
}
</style>
