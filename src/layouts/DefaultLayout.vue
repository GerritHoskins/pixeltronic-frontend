<template>
  <div id="safeArea" style="min-height: 100vh" class="flex h-screen flex-col justify-between font-sans">
    <navigation-component :nav-items="navItems.header" v-if="jwt" />

    <main class="mb-auto">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </main>

    <footer-component :nav-items="navItems.footer" />
  </div>
</template>

<script setup lang="ts">
import NavigationComponent from '@/components/common/NavigationComponent.vue';
import useNavigationRoutes from '@/composables/useNavigationRoutes';
import FooterComponent from '@/components/common/FooterComponent.vue';
import { useUserStore } from '@/stores/user';

const { jwt } = useUserStore();

const { navItems } = useNavigationRoutes();
</script>

<style scoped>
#safeArea {
  margin: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px)
    env(safe-area-inset-left, 0px) !important;
}
</style>
