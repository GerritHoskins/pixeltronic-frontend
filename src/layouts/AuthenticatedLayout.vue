<template>
  <div id="safeArea" class="two-column-layout flex h-screen flex-col justify-between font-sans">
    <navigation-component :nav-items="navItems.header" show-items />

    <main class="mb-auto">
      <slot />
    </main>

    <footer-component :nav-items="navItems.footer" />
  </div>
</template>

<script setup lang="ts">
import useNavigationRoutes from '@/composables/useNavigationRoutes';
import FooterComponent from '@/components/common/FooterComponent.vue';
import NavigationComponent from '@/components/common/NavigationComponent.vue';

const { navItems } = useNavigationRoutes();
</script>

<style scoped lang="scss">
#safeArea {
  margin: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px)
    env(safe-area-inset-left, 0px);
}
</style>
