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
      <template v-for="navItem in navItems" :key="navItem.path">
        <router-link :to="{ name: navItem.name }" :aria-label="`Navigate to ${navItem.label}`"
          >{{ navItem.name }}
        </router-link>
      </template>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  navItems: Array<{
    name: string;
    path: string;
    label: string;
  }>;
}>();
</script>
