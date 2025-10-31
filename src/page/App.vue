<template>
  <div>
    <Loader :loading="isLoading" />
    <div class="flex flex-col md:flex-row min-h-screen">
      <Sidebar ref="sidebar" v-if="!route.meta.isLanding" />
      <main class="flex-1 min-h-screen w-full md:w-auto">
        <!--Menu icon for mobile web-->
        <button
          @click="$refs.sidebar?.toggleSidebar"
          class="fixed top-4 left-4 z-40 md:hidden bg-sky-600 text-white p-3 rounded-lg shadow-lg hover:bg-sky-700 transition-colors"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <router-view v-slot="{ Component, route }">
          <transition name="fade" mode="out-in">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

<script src="./js/app.js"></script>

<style lang="scss" scoped>
@use '@/assets/css/main.scss' as *;

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
