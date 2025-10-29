<template>
  <div class="landing-page bg-wave">
    <div class="landing-page__content">
      <div class="landing-page__content-left">
        <h1 class="landing-page__content-title">Madelene Honora</h1>
        <p class="landing-page__content-description">Front-End Engineer</p>
        <button
          class="landing-page__content-button"
          @click="$emit('enterPage')"
        >
          Get to know me
        </button>
      </div>
      <div class="landing-page__content-right">
      <img
        src="@/assets/img/profile-2.jpg"
        alt="Profile Landing"
        class="landing-page__content-image"
      />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/css/main.scss" as *;

.landing-page {
  
  @apply 
  justify-center items-center 
  w-full min-h-screen 
  flex flex-col;

  &__content {
    @apply 
    animate-fadeLeft animate-float
    flex gap-4
    bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl 
    px-10 py-8 md:px-16 md:py-12
    justify-center;

    &-left {
      @apply
      flex flex-col;
    }

    &-title {
      @apply 
      text-4xl font-extrabold text-sky-600 
      drop-shadow-lg
      tracking-wide;
    }
    &-description {
      @apply 
      text-2xl font-extrabold text-sky-500 
      mb-6 tracking-wide;
    }
    &-button {
      @apply 
      border-2 border-sky-600 
      text-sky-700 
      hover:text-white hover:bg-sky-700 
      px-4 py-2 
      rounded-md 
      transition duration-700 ease-in-out;
    }
    &-image {
      @apply
      justify-center
      w-[160px] h-[160px]
      rounded-full object-cover shadow-2xl;
    }
  }
}
</style>
