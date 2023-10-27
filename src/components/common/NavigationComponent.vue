<template>
  <header class="flex items-center justify-between py-10">
    <brand-logo />
    <div v-if="showItems" class="flex items-center space-x-4 leading-5 sm:space-x-6">
      <template v-for="navItem in navItems" :key="navItem.path">
        <router-link :to="{ name: navItem.name }" :aria-label="`Navigate to ${navItem.label}`"
          >{{ navItem.name }}
        </router-link>
      </template>
    </div>
  </header>
</template>

<script setup lang="ts">
import BrandLogo from '@/components/common/BrandLogo.vue';

defineProps<{
  navItems: Array<{
    name: string;
    path: string;
    label: string;
  }>;
  showItems?: boolean;
}>();
</script>
