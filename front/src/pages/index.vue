<template>
  <div>
    <SectionParticales></SectionParticales>
    <projects-section></projects-section>
    <talks-section></talks-section>
  </div>
</template>

<script>
import SectionParticales from '@/components/index/sectionParticles'
import TalksSection from '@/components/index/talksSection'
import ProjectsSection from '@/components/index/projectsSection'

export default {
	name: 'Index',
  components: {
    SectionParticales,
    TalksSection,
    ProjectsSection
  },
  data () {
	  return {
	    xpData: {
	      title: "Talks :",
        profilePicture: null,
        textH3: null,
        textH4: null
      }
    }
  }
}
</script>

<style>
</style>
