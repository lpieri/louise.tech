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
	      title: "Bienvenue sur louise.lgbt",
        profilePicture: "static/img/logo.png",
        textH3: "Mon nom est Louise Pieri, je suis une jeune développeuse passionné par la blockchain, la sécurité et les réseaux décentraliser...",
        textH4: null
      },
      pcData: {
	      title: "Mon pacours..",
        profilePicture: null,
        textH4: "J'ai commencé à coder en 2017 quand je suis rentrée à 42 Paris",
        textH3: null
      }
    }
  }
}
</script>

<style>
</style>
