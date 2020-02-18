<template>
<div>
  <SectionParticales></SectionParticales>
  <TemplateSection :data="xpData"></TemplateSection>
  <TemplateSection :data="pcData"></TemplateSection>
</div>
</template>

<script>
import SectionParticales from '../components/index/sectionParticales'
import TemplateSection from '../components/index/templateSection'

export default {
	name: 'Index',
  components: {
    SectionParticales,
    TemplateSection
  },
  data () {
	  return {
	    xpData: {
	      title: null,
        profilePicture: null,
        textH3: null,
        textH4: null
      },
      pcData: {
	      title: null,
        profilePicture: null,
        textH3: null,
        textH4: null,
        videoLink: null,
        cards: {
          card1: {
            link: null,
            title: null,
            preview: null,
            description:  null,
            duration: 0
          }
        }
      }
    }
  }
}
</script>

<style>
</style>
