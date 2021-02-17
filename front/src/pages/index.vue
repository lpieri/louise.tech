<template>
  <div>
    <SectionParticales></SectionParticales>
    <projects-section></projects-section>
    <SwiftStudentChallengeSection></SwiftStudentChallengeSection>
    <talks-section></talks-section>
  </div>
</template>

<script>
import SectionParticales from '@/components/index/sectionParticles'
import SwiftStudentChallengeSection from '@/components/index/sscSection'
import TalksSection from '@/components/index/talksSection'
import ProjectsSection from '@/components/index/projectsSection'

export default {
	name: 'Index',
  components: {
    SectionParticales,
    SwiftStudentChallengeSection,
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
