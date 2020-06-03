<template>
    <section id="Talks" class="section">
      <div class="container">
        <div class="column">
          <h2 class="title is-2 lato-title-black">
            Projects :
          </h2>
        </div>

        <div class="columns is-centered">
          <div class="column is-2">
            <aside class="menu">
              <ul class="menu-list">
                <li><a class="title is-5" :class="{'is-active':  ft_is_active}" @click="selectProjects('42')">42 Projects</a></li>
                <li><a class="title is-5" :class="{'is-active':  perso_is_active}" @click="selectProjects('perso')">Perso Projects</a></li>
              </ul>
            </aside>
          </div>

          <div class="column is-9">

              <div class="columns is-multiline" v-if="perso_is_active || ft_is_active">

                <div class="column is-5 card card-project" v-for="project in project_to_print">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4"><a :href="project.link">{{ project.name }}</a></p>
                      </div>
                    </div>

                    <div class="content">
                      {{ project.description }}
                    </div>
                </div>

                <!--<div class="column is-full">-->
                  <!--<nav class="pagination is-centered is-rounded" role="navigation" aria-label="pagination">-->
                    <!--<ul class="pagination-list">-->
                      <!--<li><a class="pagination-link" aria-label="Goto page 1">1</a></li>-->
                      <!--<li><span class="pagination-ellipsis">&hellip;</span></li>-->
                      <!--<li><a class="pagination-link" aria-label="Goto page 45">2</a></li>-->
                    <!--</ul>-->
                  <!--</nav>-->
                <!--</div>-->

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
      ft_is_active: true,
      perso_is_active: false,
      project_to_print: {},
      projects_perso: {
        0: {
          name: "Meep",
          link: "https://github.com/lpieri/Meep",
          description: "Meep is a game with two different worlds and only one mission."
        },
        1: {
          name: "Scripts for 42 sessions",
          link: "https://github.com/lpieri/scripts_42",
          description: "Set of functions to change your preferences on Macos."
        }
      },
      ft_projects: {
        0: {
          name: "Swifty Proteins",
          link: "https://github.com/lpieri/Swifty-Proteins",
          description: "Project 42, where we have to create an iOS application from scratch."
        },
        1: {
          name: "Swifty Companion",
          link: "https://github.com/lpieri/Swifty-Companion",
          description: "Project 42, where we have to create an iOS application from scratch using the api of 42 and OAuth2."
        },
        2: {
          name: "Boot2Root",
          link: "https://github.com/lpieri/boot2root",
          description: "An IT security challenge."
        },
        3: {
          name: "ft_ssl",
          link: "https://github.com/lpieri/ft_ssl",
          description: "A series of projects of 42, where we have to re-code some part of OpenSSL."
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
        this.perso_is_active = true
        if (this.perso_is_active) {
          this.project_to_print = this.projects_perso
        }
      } else if (name === '42') {
        if (this.perso_is_active === true) {
          this.perso_is_active = false
        }
        this.ft_is_active = true
        if (this.ft_is_active) {
          this.project_to_print = this.ft_projects
        }
      }
    },
  },
  mounted() {
    if (this.ft_is_active) {
      this.project_to_print = this.ft_projects
    }
  }
}
</script>

<style scoped>
  #Talks {
    background-color: hsl(0, 0%, 98%);
  }

  .card-project {
    padding: 15px !important;
    margin: 5px 5px 5px 5px;
  }
</style>
