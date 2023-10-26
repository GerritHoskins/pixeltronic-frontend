<template>
  <div id="safeArea" style="min-height: 100vh" class="authenticated-layout shadow-2 rounded-borders">
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
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import NavigationComponent from '@/components/common/NavigationComponent.vue';
import useNavigationRoutes from '@/composables/useNavigationRoutes';
import FooterComponent from '@/components/common/FooterComponent.vue';

//const tab = ref(allNavigationRoutes[0]?.path || '');
const { navItems } = useNavigationRoutes();
const router = useRouter();
const pageTitle = computed(() => {
  return router.currentRoute.value.meta?.contentTitle || router.currentRoute.value.meta?.title;
});
</script>

<style scoped lang="scss">
#safeArea {
  margin: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px)
    env(safe-area-inset-left, 0px);
}
</style>
