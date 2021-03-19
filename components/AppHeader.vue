<template>
  <header>
    <div class="relative z-10 flex items-center font-sans bg-center bg-no-repeat bg-cover hero-header">
       
       <div class="absolute top-0 left-0 mx-12 my-12 lg:mx-20">
          <logo class="h-24 transition-all duration-500 lg:h-32 "/>
        </div>
 
      <div class="mx-auto text-center text-white uppercase"> 
        <h1 class="block text-3xl tracking-cptitlewide lg:tracking-titlewide md:text-4xl lg:text-5xl heading-text-primary">MIGHTY BARBERSHOP</h1>
        <h2 class="block mt-3 text-sm md:-ml-2 tracking-cptitletight lg:tracking-titletight sm:text-md lg:text-xl heading-text-primary-sub">THE HOME OF THE MIGHTIEST HAIRCUT</h2>
        <button class="inline-block px-6 py-2 mt-8 mr-5 text-sm font-medium text-center text-white bg-orange-400 border border-orange-400 border-solid rounded-md cursor-pointer md:px-10 md:py-3 hover:bg-orange-600 hover:border-orange-600 md:text-base">Book Now</button>
        <button class="px-6 py-2 text-sm font-medium text-white border-2 border-orange-400 rounded-md md:px-10 md:py-3 md:text-base hover:bg-orange-400 hover:text-gray-100 focus:outline-none">Haircut Gallery</button>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo.vue';

export default {
  components:{
    Logo,
  }

}
</script>

<style lang="scss" scoped>



.hero-header{
  height: 100vh;
  background-image: linear-gradient(to top left, rgba($darkBrown,.5), rgba($lightBrown,.5)), url('~assets/header/header.jpg');
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}




</style>
