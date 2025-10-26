<template>
  <div>
    <Loader :loading="isLoading" />
    <LandingPage v-if="isLanding" @enterPage="enterPage"/>
    <div class="flex flex-col md:flex-row min-h-screen" v-else>
      <Sidebar />
      <main class="flex-1 min-h-screen">
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
@use "@/assets/css/main.scss" as *;

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
