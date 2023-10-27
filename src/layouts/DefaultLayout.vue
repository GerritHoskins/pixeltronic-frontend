<template>
  <div id="safeArea" class="flex h-screen default-layout flex-col justify-between font-sans">
    <main class="mb-auto">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </main>

    <footer-component :nav-items="navItems.footer" />
  </div>
</template>

<script setup lang="ts">
import useNavigationRoutes from '@/composables/useNavigationRoutes';
import FooterComponent from '@/components/common/FooterComponent.vue';
const { navItems } = useNavigationRoutes();
</script>

<style scoped>
#safeArea {
  margin: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px)
    env(safe-area-inset-left, 0px) !important;
}
</style>
