<template>
  <nav class="absolute z-20 w-full">
    <div class="flex px-12 mt-16 bg-transparent md:px-20 ">

          <label  class="block ml-auto cursor-pointer lg:hidden">
                  <svg @click="toggleShown"  class="text-white fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                      <title>Menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
              </label>

                <div  v-if="isShown == true"  class="absolute right-0 mr-16 text-white uppercase lg:hidden lg:w-auto" id="menu"> 
            <nav >
              <ul @click="isShown = !isShown"  class="mt-6 space-y-4 lg:flex lg:pt-0 lg:mt-0 lg:space-y-0">
                <nuxt-link to="#about" class="text-xs lg:p-4 header-link md:text-base" tag="li" >About</nuxt-link>
                <nuxt-link to="#testimonies" class="text-xs lg:p-4 header-link md:text-base" tag="li" >Testimonies</nuxt-link>
                <nuxt-link to="#rates" class="text-xs lg:p-4 header-link md:text-base" tag="li" >Rates</nuxt-link>
                <nuxt-link to="#booking" class="text-xs lg:p-4 header-link md:text-base" tag="li" >Booking</nuxt-link>
              </ul>
            </nav>
        </div>
        

        <div  class="absolute right-0 hidden mr-16 text-white uppercase lg:flex lg:w-auto" id="menu"> 
            <nav >
              <ul v-if="isShown == true"  class="mt-16 space-y-4 lg:flex lg:pt-0 lg:mt-0 lg:space-y-0">
                <nuxt-link to="#about" class="text-xs lg:p-4 header-link md:text-base" tag="li" >About</nuxt-link>
                <nuxt-link to="#testimonies" class="text-xs lg:p-4 header-link md:text-base" tag="li" >Testimonies</nuxt-link>
                <nuxt-link to="#rates" class="text-xs lg:p-4 header-link md:text-base" tag="li" >Rates</nuxt-link>
                <nuxt-link to="#booking" class="text-xs lg:p-4 header-link md:text-base" tag="li" >Booking</nuxt-link>
              </ul>
            </nav>
        </div>

    </div>
  </nav>

  
</template>

<script>
import Logo from '@/components/Logo.vue';

export default {
  components:{
    Logo,
  },
  data: () => ({
    isShown: true,
  }),
  methods:{
    toggleShown: function() {
            this.isShown = !this.isShown
    }
  }


}
</script>

<style lang="scss" scoped>



.seamless-transition{
  transition: all .2s;
}


.header-link{
  @apply cursor-pointer;
  @apply block;
  @apply gap-2;

  &:hover{
    @apply border-b;
    @apply border-white;
  }


}

#menu{
  
}
</style>