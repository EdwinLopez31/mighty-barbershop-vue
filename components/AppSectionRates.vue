<template>
      <section id="rates" class="pt-10 section-rates">

      <div class="max-w-lg mx-auto mt-10 mb-20 text-2xl text-center section-title-rates lg:text-4xl">
        <h1>
          Barbershop Rates
        </h1>
      </div>

    <div class="grid grid-cols-1 row-gap-24 md:mx-20 md:grid-cols-2 lg:grid-cols-3 md:col-gap-24">
      
      <div class="col-span-1 mx-auto card md:mx-0">
        <div class="card-side card-side--front">
          <div class="h-48 card-side--front__img card-side--front__img--1">

          </div>
          <h4 class="card-side--front__title">
            <span class="card-side--front__title-span card-side--front__title-span--1">
              Neat Haircut
            </span> 
          </h4>
          <div class="card-side--front__details">
            <ul>
              <li>Haircut</li>
              <li>Massage</li>
              <li>Hot Towel</li>
            </ul>
          </div>
        </div>

        <div class="bg-gray-700 card-side card-side--back card-side--back--1">
          <h4 class="card-side--back__price">
            ₱200
          </h4>
        </div>
      </div>

      <div class="col-span-1 mx-auto card md:mx-0">
        <div class="card-side card-side--front">
          <div class="h-48 card-side--front__img card-side--front__img--2">

          </div>
          <h4 class="card-side--front__title">
            <span class="card-side--front__title-span card-side--front__title-span--2">
              Goatee Artistry
            </span> 
          </h4>
          <div class="card-side--front__details">
            <ul>
              <li>Detailed Trim</li>
              <li>Sculpting</li>
              <li>Massage</li>
              <li>Hot Towel</li>
            </ul>
          </div>
        </div>

        <div class="bg-gray-700 card-side card-side--back card-side--back--2">
          <h4 class="card-side--back__price">
            ₱240
          </h4>
        </div>
      </div>

      <div class="col-span-1 mx-auto card md:mx-0">
        <div class="card-side card-side--front">
          <div class="h-48 card-side--front__img card-side--front__img--3">

          </div>
          <h4 class="card-side--front__title">
            <span class="card-side--front__title-span card-side--front__title-span--3">
              Classic Man
            </span> 
          </h4>
          <div class="card-side--front__details">
            <ul>
              <li>Cut & Rinse</li>
              <li>B & A Shave</li>
              <li>Massage</li>
              <li>Hot Towel</li>
              <li>40G Pomade</li>
            </ul>
          </div>
        </div>

        <div class="bg-gray-700 card-side card-side--back card-side--back--3">
          <h4 class="card-side--back__price">
            ₱600
          </h4>
        </div>
      </div>

    </div>

    <div class="mt-20 text-center">
      <nuxt-link to="#pricelist" class="btn btn-filled">See Complete Pricelist</nuxt-link>
    </div>
    

  </section>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.card{

  @apply relative;
  height: 33rem;
  width: 19rem;
  perspective: 120rem;
  backface-visibility: hidden;
  transition: all ease-in-out .2s;

  &-side{
    @apply absolute;
    @apply top-0;
    @apply left-0;
    @apply h-full;
    @apply w-full;
    box-shadow: 0 5px 8px rgba(black, .6);
    backface-visibility: hidden;
    overflow: hidden;
    transition: all .8s ease;

    &--back{
    
    transform: rotateY(180deg);
    
    
    @apply flex;
    @apply justify-center;
    
    &__price{
      @apply self-center;
      @apply text-4xl;
      @apply text-white;
    }

    &--1{
      background-image: linear-gradient(to right bottom, $lightBrown, $darkBrown);
    }
    &--2{
      background-image: linear-gradient(to bottom right, $lightBlue, $darkBlue);  
    }
    &--3{
      background-image: linear-gradient(to bottom right, $lightTeal, $darkTeal);  
    }
  }
 

  &--front{
    
    &__img{
      
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
      @apply bg-cover;
      background-blend-mode: screen;
    
      &--1{
        
        background-image: url(~assets/rates/haircut.jpg), linear-gradient(to right bottom, $darkBrown, $lightBrown);
      }

      &--2{
        background-image: url(~assets/rates/shave.jpg), linear-gradient(to right bottom, $darkBlue, $lightBlue);
      }

      &--3{
        background-image: url(~assets/rates/package.jpg), linear-gradient(to right bottom, $darkTeal, $lightTeal);
      }
    }

    &__title{
      @apply text-white;
      @apply text-3xl;
      @apply uppercase;
      @apply font-light;
      @apply flex;
      @apply justify-center;

      &-span{
        @apply p-1;
        @apply -mt-12;
        @apply z-50;

        &--1{
          background-image: linear-gradient(to right bottom, rgba($lightBrown,.85),rgba($darkBrown,.85));
        }

        &--2{
          background-image: linear-gradient(to right bottom, rgba($lightBlue,.85),rgba($darkBlue,.85));
        }

        &--3{
          background-image: linear-gradient(to right bottom, rgba($lightTeal,.85),rgba($darkTeal,.85));
        }

      }
    }

    &__details{
      @apply mt-5;
      color: $gray;
      ul{
        list-style: none;
        width: 70%;
        margin: 0 auto;
        
        li{
          padding: 1rem;
          text-align: center;
          
          &:not(:last-child){
            border-bottom: .05rem solid #eee;
          }
        }
      }
    }
  }
  }

  &:hover &-side--front{
    transform: rotateY(-180deg);
  }
  &:hover &-side--back{
    transform:rotateY(0deg);
  }
}




</style>