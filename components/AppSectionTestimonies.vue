<template>
  <section id="testimonies" class="section-testimonies">

    <div class="mt-40 mb-20 text-2xl text-center section-title-testimonies lg:text-4xl">
        <h1>
          Only the Mightiest Haircut
        </h1>
    </div>

    <div class="grid grid-rows-2 row-gap-10 -mt-12 lg:mt-0">

      <div class="row-start-1 customer__comment">
        <figure class="w-32 h-32 mr-5 customer-container">
          <img src="~assets/testimonies/gentleman3.jpg" alt="Gentleman 1" class="customer-container__img">
        </figure>
        <div class="text-sm md:text-base">
          <h3 class="text-white heading-text-tertiary">
            The best barbershop in the city!
          </h3>
          <p class="text-white heading-text-tertiary-sub">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi libero ipsa ipsum deserunt sed est non! Minima doloremque aliquid dicta reiciendis reprehenderit. Deserunt nostrum quasi illo odio voluptatibus ducimus similique, ab nam magni, fuga dolorem! Ipsa, voluptatibus quod tempora molestias, vero amet laudantium quasi distinctio dolores placeat, quibusdam voluptas modi?
          </p>
        </div>
      </div>

      <div class="row-start-2 customer__comment">
        <figure class="w-32 h-32 mr-5 customer-container">
          <img src="~assets/testimonies/gentleman2.jpg" alt="Gentleman 2" class="customer-container__img">
        </figure>
        <div class="text-sm md:text-base">
          <h3 class="text-white heading-text-tertiary">
            The best barbershop in the city!
          </h3>
          <p class="text-white heading-text-tertiary-sub">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aliquid ad quaerat a deserunt temporibus pariatur tempore atque sunt eligendi delectus corrupti, non dignissimos natus minima adipisci in. Dignissimos voluptatibus quae reprehenderit exercitationem mollitia eligendi deserunt quis consectetur dicta nobis velit dolorum, sequi praesentium deleniti nulla quas obcaecati! Debitis amet temporibus laborum adipisci distinctio dolorum, quis enim fuga, consectetur labore repellendus omnis nobis soluta, esse eius praesentium minus fugit?
          </p>
        </div>
      </div>

      <div class="order-last mx-auto mt-10 mb-20 text-white">
          <nuxt-link to="#Learn" class="btn-transparent">See More &rarr;</nuxt-link>
      </div>

    </div>

  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.customer{

  &__comment{
    transition: all .3s;
    width: 75%;
    box-shadow: 0 5px 8px rgba(black, .6);
    background-color: rgba(0, 0, 0, 0.400);
    border-top-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    @apply mx-auto;
    @apply bg-opacity-50;
    @apply px-5;
    @apply py-5;
    @apply my-auto;
    
    &:hover{
      border-top-right-radius: 1rem;
      border-bottom-left-radius: 1rem;
      border-top-left-radius: 0rem;
      border-bottom-right-radius: 0rem;
    }
  }

  &-container{
  
    clip-path: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
    float: left;

  
    &__img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

</style>