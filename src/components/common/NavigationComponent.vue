<template>
  <header class="flex items-center justify-between py-10">
    <brand-logo />
    <div v-if="showItems" class="flex items-center space-x-4 leading-5 sm:space-x-6">
      <template v-for="navItem in navItems" :key="navItem.path">
        <div class="cursor-pointer" v-if="navItem.meta?.clickAction?.action" @click="navItem.meta.clickAction.action">
          {{ navItem.meta.title }}
        </div>
        <router-link v-else :to="{ name: navItem.name }" :aria-label="`Navigate to ${navItem.meta.contentTitle}`">
          {{ navItem.meta.title }}
        </router-link>
      </template>
      <button aria-label="Toggle Dark Mode" @click="toggleDarkMode">
        <dark-mode-icon :svg-props="{ width: 20, height: 20 }" :is-toggled="toggleIcon" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import BrandLogo from '@/components/common/BrandLogo.vue';
import DarkModeIcon from '@/components/common/icons/DarkModeIcon.vue';
import { ref } from 'vue';
import type { NavigationRoute } from '@/types/Navigation';

defineProps<{
  navItems: NavigationRoute[];
  showItems?: boolean;
}>();

const toggleIcon = ref(false);
const toggleDarkMode = () => {
  toggleIcon.value = !toggleIcon.value;
  const htmlRootEl = document.getElementsByTagName('html')[0];
  if (htmlRootEl) {
    htmlRootEl.classList.toggle('dark');
  }
};
</script>
