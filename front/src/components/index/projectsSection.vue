<template>
    <section id="Talks" class="section">
      <div class="container">
        <div class="column">
          <h2 class="title is-2 lato-title-black">
            Projects :
          </h2>
        </div>

        <div class="columns is-centered">
          <aside class="menu">
            <ul class="menu-list">
              <li><a :class="{'is-active':  ft_is_active}" @click="selectProjects('42')">42 Projects</a></li>
              <li><a :class="{'is-active':  perso_is_active}" @click="selectProjects('perso')">Perso Projects</a></li>
            </ul>
          </aside>

          <div class="column is-4" v-if="perso_is_active || ft_is_active">

            <div class="card card-project" v-for="project in project_to_print">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{{ project.name }}</p>
                  </div>
                </div>

                <div class="content">
                  {{ project.description }}
                </div>
            </div>

          </div>
        </div>
      </div>

    </section>
</template>

<script>
export default {
  name: "projectsSection",
  data () {
    return {
      ft_is_active: false,
      perso_is_active: false,
      project_to_print: {},
      projects_perso: {
        0: {
          name: "Meep",
          description: "Meep is a game with two different worlds and only one mission."
        }
      },
      ft_projects: {
        0: {
          name: "Swifty Proteins",
          description: "Project 42, where we have to create an iOS application from scratch."
        }
      }
    }
  },
  methods: {
    selectProjects(name) {
      if (name === 'perso') {
        if (this.ft_is_active === true) {
          this.ft_is_active = false
        }
        this.perso_is_active = !this.perso_is_active
        if (this.perso_is_active) {
          this.project_to_print = this.projects_perso
        }
      } else if (name === '42') {
        if (this.perso_is_active === true) {
          this.perso_is_active = false
        }
        this.ft_is_active = !this.ft_is_active
        if (this.ft_is_active) {
          this.project_to_print = this.ft_projects
        }
      }
    }
  }
}
</script>

<style scoped>
  .card-project {
    padding: 20px !important;
  }
</style>
