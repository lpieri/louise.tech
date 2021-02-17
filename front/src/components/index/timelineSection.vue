<template>
  <section id="TimeLine" class="section">
    <div class="container">
      <div class="column">
        <h2 class="title is-2 lato-title-black">
          Timeline :
        </h2>
      </div>

        <div class="timeline is-centered">
          <div class="timeline is-centered" v-for="year in years">
            <header class="timeline-header">
              <span class="tag is-large is-link">{{ year.name }}</span>
            </header>
            <div class="timeline-item is-link" v-for="event in year.events">
              <div class="timeline-marker is-link"></div>
              <div class="timeline-content">
                <p class="heading">{{ event.date }}</p>
                <p>{{ event.description }}</p>
              </div>
            </div>
          </div>
          <header class="timeline-header is-centered">
            <span class="tag is-large is-link">Today</span>
          </header>
        </div>
      </div>
  </section>
</template>

<script>
export default {
name: "timelineSection",
  data () {
    return {
      years: {
        0: {
          name: "2017",
          events: {
            0: {
              date: "August 2017",
              description: "Piscine of 42 Paris"
            },
            1:{
              date: "November 2017",
              description: "Start of my schooling at 42 Paris"
            }
          }
        },
        1: {
          name: "2018",
          events: {
            0: {
              date: "March 2018",
              description: "1st team of Hackathon HART"
            },
            1: {
              date: "June 2018",
              description: "Beginning of my First-Internship at 42 Lyon"
            },
            2:{
              date: "July 2018",
              description: "42 Project: RT"
            },
            3:{
              date: "July 2018",
              description: "Level 7 at 42"
            },
            4: {
              date: "December 2018",
              description: "End of my internship at 42 Lyon"
            },
            5: {
              date: "December 2018",
              description: "Level 11 at 42"
            }
          }
        },
        2: {
          name: "2019",
          events: {
            0: {
              date: "April 2019",
              description: "42 Project: ft_ssl_md5"
            },
            1: {
              date: "May 2019",
              description: "1st team of Hackathon Born2Hack"
            },
            2: {
              date: "August 2019",
              description: "42 Project: Matcha"
            },
            3: {
              date: "August 2019",
              description: "Creation of the association 42 Blockchain"
            },
            4: {
              date: "September 2019",
              description: "42 Project: RogerSkyline2"
            },
            5:{
              date: "September 2019",
              description: "Start of project Blockchain-Service (part of 42 Alumni)"
            },
            6: {
              date: "November 2019",
              description: "42 Project: Malloc"
            },
            7: {
              date: "November 2019",
              description: "Level 14 at 42"
            }
          }
        },
        3: {
          name: "2020",
          events: {
            0: {
              date: "April 2020",
              description: "42 Project: Swifty Companion"
            },
            1: {
              date: "May 2020",
              description: "42 Project: Swifty Proteins"
            },
            2: {
              date: "May 2020",
              description: "Level 16 at 42"
            },
            3: {
              date: "June 2020",
              description: "Winner of Swift Student Challenge"
            },
            4: {
              date: "November 2020",
              description: "Level 19 at 42"
            },
          }
        },
        4: {
          name: "2021",
          events: {
            0: {
              date: "March 2021",
              description: "Beginning of my freelance activity"
            },
          }
        }
      }
    }
  }
}
</script>

<style scoped>
#TimeLine {
  background-color: hsl(0, 0%, 98%);
}

</style>
