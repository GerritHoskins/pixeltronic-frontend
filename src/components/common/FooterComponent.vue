<template>
  <footer>
    <div class="mt-16 flex flex-col items-center">
      <div class="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <router-link
          v-for="navItem in navItems"
          :key="navItem.name"
          :to="{ name: navItem.name }"
          :aria-label="`Navigate to ${navItem.label}`"
          >{{ navItem.name }}
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { NavigationRouterLink } from '@/types/Navigation';

defineProps<{
  navItems: Array<NavigationRouterLink>;
}>();
</script>
