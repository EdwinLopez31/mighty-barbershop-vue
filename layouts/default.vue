<template>
  <div>
    <app-navbar />
    <app-header />
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AppNavbar from '../components/AppNavbar.vue'

export default {
  components:{
    AppHeader,
    AppNavbar,
  }
}
</script>

<style>

</style>
