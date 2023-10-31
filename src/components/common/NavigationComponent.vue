<template>
  <header class="flex items-center justify-between py-10">
    <brand-logo />
    <div v-if="showItems" class="flex items-center space-x-4 leading-5 sm:space-x-6">
      <div class="sm:block hidden" v-for="navItem in navItems" :key="navItem.name">
        <div class="cursor-pointer" v-if="navItem.clickAction?.action" @click="navItem.clickAction.action">
          {{ navItem.label }}
        </div>
        <router-link v-else :to="{ name: navItem.name }" :aria-label="`Navigate to ${navItem.contentTitle}`">
          {{ navItem.label }}
        </router-link>
      </div>
      <button aria-label="Toggle Dark Mode" @click="toggleDarkMode">
        <dark-mode-icon :svg-props="{ width: 28, height: 28 }" :is-toggled="toggleIcon" />
      </button>
      <mobile-menu :items="navItems" />
    </div>
  </header>
</template>

<script setup lang="ts">
import BrandLogo from '@/components/common/BrandLogo.vue';
import DarkModeIcon from '@/components/common/icons/DarkModeIcon.vue';
import { ref } from 'vue';
import type { NavigationRouterLink } from '@/types/Navigation';
import MobileMenu from '@/components/common/MobileMenu.vue';

defineProps<{
  navItems: NavigationRouterLink[];
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
