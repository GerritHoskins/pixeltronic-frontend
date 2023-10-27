<template>
  <div
    id="safeArea"
    style="min-height: 100vh"
    class="authenticated-layout flex h-screen flex-col justify-between font-sans"
  >
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
import { useUserStore } from '@/stores/user';
import useNavigationRoutes from '@/composables/useNavigationRoutes';
import FooterComponent from '@/components/common/FooterComponent.vue';
import NavigationComponent from '@/components/common/NavigationComponent.vue';

const { jwt } = useUserStore();
const { navItems } = useNavigationRoutes();
</script>

<style scoped lang="scss">
#safeArea {
  margin: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px)
    env(safe-area-inset-left, 0px);
}
</style>
