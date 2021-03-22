<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <h1 class="title is-1 lato-title-pink">louise.tech</h1>
      </router-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item buttons">
          <button class="button is-rounded is-medium" @click="showModal('ContactInfo')">
            <strong>Contact information</strong>
          </button>
        </div>
      </div>
      <Modal :isShowArg="modalIsShow" :childArg="modalContentName" @changeModalContentName="modalContentName = $event" @changeModalIsShow="modalIsShow = $event"></Modal>
    </div>

  </nav>
</template>

<script>
  import Modal from '../Modals/modal'

  export default {
    name: 'NavBar',
    data () {
      return {
        modalIsShow: false,
        modalContentName: null
      }
    },
    components: {
      Modal
    },
    methods: {
      /**
       *  showModal show the Modal
       *
       * @param ContentName it's the name of component child that the Modal must choose (ref in Modal.vue)
       */
      showModal (ContentName) {
        this.modalIsShow = true
        this.modalContentName = ContentName
      },

    },
    created () {


      document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

          // Add a click event on each of them
          $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {

              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);

              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');

            });
          });
        }

      });

    }
  }
</script>

<style>
.navbar {
  background: #ffffffde !important;
}
</style>
