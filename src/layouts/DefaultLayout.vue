<template>
  <div id="safeArea" style="min-height: 100vh" class="flex h-screen flex-col justify-between font-sans">
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
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import NavigationComponent from '@/components/common/NavigationComponent.vue';
import useNavigationRoutes from '@/composables/useNavigationRoutes';
import FooterComponent from '@/components/common/FooterComponent.vue';
import type { NavigationRouterLink } from '@/types/Navigation';
import { useUserStore } from '@/stores/user';

const router = useRouter();
const pageTitle = computed(() => {
  return router.currentRoute.value.meta?.contentTitle || router.currentRoute.value.meta?.title;
});
const navigationItems = useNavigationRoutes();
const { jwt } = useUserStore();

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

<style scoped>
#safeArea {
  margin: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px)
    env(safe-area-inset-left, 0px) !important;
}
</style>
