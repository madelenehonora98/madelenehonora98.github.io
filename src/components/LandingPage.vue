<template>
  <div class="landing-page">
    <div class="landing-page__content">
      <div class="landing-page__content-left">
        <h1 class="landing-page__content-title">Madelene Honora</h1>
        <button
          class="landing-page__content-button"
          @click="$emit('enterPage')"
        >
          Get to know me
        </button>
      </div>
      <div class="landing-page__content-left">

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.landing-page {
  @apply text-center justify-center items-center 
  w-full min-h-screen 
  flex flex-col;

  &__content {
    @apply animate-fadeLeft 
    flex flex-col 
    items-center justify-center;

    &-title {
      @apply text-4xl font-extrabold text-sky-600 
      mb-6 tracking-wide;
    }

    &-button {
      @apply border-2 border-sky-600 
      text-sky-700 
      hover:text-white hover:bg-sky-700 
      px-4 py-2 
      rounded-md 
      transition duration-700 ease-in-out;
    }
  }
}
</style>
