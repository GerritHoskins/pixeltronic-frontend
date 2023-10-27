<template>
  <div
    id="safeArea"
    style="min-height: 100vh"
    class="authenticated-layout flex h-screen flex-col justify-between font-sans"
  >
    <navigation-component :nav-items="headerNavItems" />

    <main class="mb-auto">
      <router-view v-slot="{ Component }">
        <component :is="Component" :page-title="pageTitle" />
      </router-view>
    </main>

    <footer-component :nav-items="footerNavItems" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import NavigationComponent from '@/components/common/NavigationComponent.vue';
import useNavigationRoutes from '@/composables/useNavigationRoutes';
import FooterComponent from '@/components/common/FooterComponent.vue';
import type { NavigationRouterLink } from '@/types/Navigation';
import { useUserStore } from '@/stores/user';

const router = useRouter();
const pageTitle = computed(() => {
  return router.currentRoute.value.meta?.contentTitle || router.currentRoute.value.meta?.title;
});

const { jwt } = useUserStore();
const navigationItems = useNavigationRoutes();
const headerNavItems = computed((): Array<NavigationRouterLink> => {
  return (
    navigationItems.navItems.value.filter(
      (route: NavigationRouterLink) => jwt && !route.isFooterNavItem && route.isHeaderNavItem
    ) ?? []
  );
});
const footerNavItems = computed((): Array<NavigationRouterLink> => {
  return (
    navigationItems.navItems.value.filter(
      (route: NavigationRouterLink) => jwt && route.isFooterNavItem && !route.isHeaderNavItem
    ) ?? []
  );
});
</script>

<style scoped lang="scss">
#safeArea {
  margin: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px)
    env(safe-area-inset-left, 0px);
}
</style>
