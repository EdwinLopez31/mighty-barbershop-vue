<template>
  <section id="about" class="section-about" name="about">

      <div class="mt-40 mb-20 text-2xl text-center section-title-about lg:text-4xl">
        <h1>
          For all kinds of gentleman
        </h1>
      </div>

      <div class="flex flex-col grid-cols-2 mx-20 lg:grid">

        <div class="col-span-1 text-sm text-justify md:text-base lg:pr-12">
          <h4 class="mb-5 heading-text-tertiary text-gray">
            LOREM IPSUM
          </h4>
           <p class="mb-10 heading-text-tertiary-sub text-gray">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorem doloremque non rerum similique eveniet repellendus molestiae beatae voluptatem porro veniam assumenda sint ut cupiditate sed, labore officiis nisi natus laborum cumque repellat ratione. Temporibus eius maxime earum delectus itaque.
          </p>
          <h4 class="mb-5 heading-text-tertiary text-gray">
            LOREM IPSUM
          </h4>
           <p class="mb-10 heading-text-tertiary-sub text-gray">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa cumque neque ad! Accusantium deserunt dolor non optio omnis iste?
          </p>
        </div>

        <div class="self-center order-last mt-10 mb-10 lg:mt-0 text-gray">
          <nuxt-link to="#Learn" class="btn-transparent">Learn More &rarr;</nuxt-link>
        </div>

        <div class="relative flex col-span-1 space-x-3">
          <img src="../assets/haircuts/haircut_adult.png" alt="" class="w-1/3 lg:w-1/2 lg:absolute img__haircut img__haircut--p1">
          <img src="../assets/haircuts/haircut_teen.png"  alt="" class="w-1/3 lg:w-1/2 lg:absolute img__haircut img__haircut--p2">
          <img src="../assets/haircuts/haircut_child.png"  alt="" class="w-1/3 lg:w-1/2 lg:absolute img__haircut img__haircut--p3">
        </div>
      </div>

    </section>
    
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.img__haircut{

  border-radius: .2rem;
  box-shadow: 0 5px 8px rgba(black, .75);
  transition: all .2s;
  outline-offset: -.5rem;
  
  &--p1{
    top: 0rem;
    left: 0rem;
  }

  &--p2{
    top: 1rem;
    right: 2.5rem;
  }

  &--p3{
    top: 5.5rem;
    left: 8rem;
  }

  &:hover{
    outline: .7rem solid rgba($darkBrown, .8);
    transform: scale(1.05) translateY(-.5rem);
    box-shadow: 0 10px 16px rgba(black, .6);
    z-index: 50;
  }

  &hover &img__haircut:not(hover){
    transform: scale(0.95);
  }
}


</style>