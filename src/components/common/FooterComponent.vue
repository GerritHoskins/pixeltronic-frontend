<template>
  <footer>
    <div class="mt-16 flex flex-col items-center">
      <div class="mb-3 flex space-x-4">
        <mail-icon />
        <github-icon />
        <linked-in-icon />
      </div>

      <div class="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <router-link
          v-for="navItem in navItems"
          :key="navItem.name"
          :to="{ name: navItem.name }"
          :aria-label="`Navigate to ${navItem.label}`"
          >{{ navItem.name }}
        </router-link>
      </div>

      <div class="mb-8 text-sm text-gray-500 dark:text-gray-400">
        <a target="_blank" rel="noopener noreferrer" href="https://pixeltronic.dev">©2023 pixeltronic.dev</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { NavigationRouterLink } from '@/types/Navigation';
import MailIcon from '@/components/common/icons/MailIcon.vue';
import GithubIcon from '@/components/common/icons/GithubIcon.vue';
import LinkedInIcon from '@/components/common/icons/LinkedInIcon.vue';

defineProps<{
  navItems: Array<NavigationRouterLink>;
}>();
</script>
