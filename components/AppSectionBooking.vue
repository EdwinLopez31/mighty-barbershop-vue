<template>
  <section id="booking" class="pt-64 pb-64 section-booking">
  
    <div class="relative w-3/4 mx-auto form-container">

      <div class="form-container-bg">
        <form action="#" class="form">

          <div class="my-10 text-3xl text-center section-title-about lg:text-4xl md:text-left md:mx-10">
            <h1>
              Booking
            </h1>
          </div>

          <div class="mx-16 mb-8 form__group md:mb-5">
            <input type="text" class="w-full form__input md:w-4/12" placeholder="Full Name" name="name" id="name" required>
            <label for="name" class="form__label">Full Name</label>
          </div>

          <div class="mx-16 mb-8 form__group md:mb-5">
            <input type="email" class="w-full form__input md:w-4/12" placeholder="E-mail Address" name="email" id="email" required>
            <label for="email" class="form__label">E-mail Address</label>
          </div>
          
          <div class="mx-16 form__group">
            <select id="service" name="service" class="form__input ">
              <option disabled hidden selected>Choose a service</option>
              <optgroup label="Haircut">
                <option value="Regular Haircut">Regular Haircut</option>
                <option value="Neat Haircut">Neat Haircut</option>
                <option value="Haircut Artistry">Haircut Artistry</option>
                <option value="Haircut and Rinse">Haircut & Rinse</option>
              </optgroup>
              <optgroup label="Shave">
                <option value="Regular Shave">Regular Shave</option>
                <option value="Goatee Artistry">Goatee Artistry</option>
                <option value="Head Shave">Head Shave</option>
              </optgroup>
              <optgroup label="Package Deal">
                <option value="Classic Man">Classic Man</option>
                <option value="Easy Slick">Easy Slick</option>
                <option value="Al-Mighty Shave">Al-Mighty Shave</option>
                <option value="Twins of Twins">Twins of Twins</option>
                <option value="Service Dessert">Service Dessert</option>
                <option value="Do and Dye">Do & Dye</option>
                <option value="1,2 Combo">1,2 Combo</option>
              </optgroup>
            </select>
          </div>
          <div class="w-40 mx-auto mt-12 text-center md:mx-16 md:mt-10 form__group circleScaleBtn">
            <span>
            <nuxt-link to="#pricelist" class="tracking-wide">Submit</nuxt-link>
            </span>
          </div>

        </form>
      </div>

    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">


.form-container{
  height: 35rem;
  z-index: 100;
  box-shadow: 0 5px 8px rgba(black, .6);
  background-image: url('~assets/branches/MightyAntipolo.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &-bg{
    transition: all .4s;
    @apply absolute;
    @apply h-full;
    @apply w-full;
    background-color: rgba($white, .90);

    @media screen and (min-width: 768px) {
      clip-path: polygon(0 0, 55% 0, 45% 100%, 0 100%);
    }

    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

.form__input{
  
  @apply bg-white;
  @apply rounded-md;
  @apply border-none;
  @apply py-2;
  @apply px-2;
  @apply block;
  transition: all .3s;
  border-bottom: 3px solid transparent;
 
  
  &:focus{
    outline:none;
    border-bottom: 3px solid $lightTeal;
  }

  &:focus:invalid{
    outline:none;
    border-bottom: 3px solid $lightRed;
  }

  &::placeholder{
    color: $lightGray;
  }

  &:placeholder-shown + .form__label{
    opacity: 0;
    visibility: hidden;
    transform: translateY(-2.5rem);
  }
}

.form__label{
  @apply text-xs;
  @apply font-bold;
  @apply mx-2;
  @apply mt-2;
  display: block;
  transition: all .3s;
}
</style>