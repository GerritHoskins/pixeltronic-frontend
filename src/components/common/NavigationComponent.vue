<template>
  <header class="flex items-center justify-between py-10">
    <div>
      <div class="flex items-center justify-between">
        <div class="mr-3">
          <img src="/icons/favicon-32x32.png" alt="logo" />
        </div>
        <div class="hidden h-6 text-2xl font-semibold sm:block">pixeltronic.dev</div>
      </div>
    </div>
    <div class="flex items-center space-x-4 leading-5 sm:space-x-6">
      <router-link
        :to="{ name: tabItem.name }"
        v-for="tabItem in navItems"
        :key="tabItem.name"
        :aria-label="`Navigate to ${tabItem.label}`"
        >{{ tabItem.name }}
      </router-link>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { NavigationRouterLink } from '@/router/definitions';

defineProps<{
  navItems: Array<NavigationRouterLink>;
}>();
</script>

<style scoped></style>
