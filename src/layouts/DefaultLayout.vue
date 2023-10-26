<template>
  <div id="safeArea" style="min-height: 100vh" class="default-layout shadow-2 rounded-borders">
    <navigation-component :nav-items="navItems" />
    <main class="mb-auto">
      <router-view v-slot="{ Component }">
        <component :is="Component" :page-title="pageTitle" />
      </router-view>
    </main>

    <footer-component />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import NavigationComponent from '@/components/common/NavigationComponent.vue';
import useNavigationRoutes from '@/composables/useNavigationRoutes';
import FooterComponent from '@/components/common/FooterComponent.vue';

const router = useRouter();
const pageTitle = computed(() => {
  return router.currentRoute.value.meta?.contentTitle || router.currentRoute.value.meta?.title;
});
const { navItems } = useNavigationRoutes();
</script>

<style scoped>
#safeArea {
  margin: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px)
    env(safe-area-inset-left, 0px) !important;
}
</style>
