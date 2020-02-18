<template>
  <div>
    <SectionParticales></SectionParticales>
    <!--<template-section :data="xpData"></template-section>-->
  </div>
</template>

<script>
import SectionParticales from '@/components/index/sectionParticles'
import TemplateSection from '@/components/index/templateSection'

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
      }
    }
  }
}
</script>

<style>
</style>
