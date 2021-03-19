<template>
  <main>
    <app-section-about />
    <app-section-testimonies />
    <app-section-rates />
    <app-section-booking />
  </main>
</template>

<script>
import AppSectionAbout from '../components/AppSectionAbout'
import AppSectionRates from '../components/AppSectionRates'
import AppSectionTestimonies from '../components/AppSectionTestimonies'
import AppSectionBooking from '../components/AppSectionBooking'

export default {
  components:{
    AppSectionAbout,
    AppSectionTestimonies,
    AppSectionRates,
    AppSectionBooking,
  }
}
</script>

<style lang="scss" scoped>


</style>
