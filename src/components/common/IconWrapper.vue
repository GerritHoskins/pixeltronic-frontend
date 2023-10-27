<template>
  <a :href="svgProps?.href" class="icon-wrapper text-sm text-gray-500 transition hover:text-gray-600" target="_blank">
    <span class="sr-only">{{ svgProps?.label }}</span>
    <slot />
  </a>
</template>
<script setup lang="ts">
defineProps<{
  svgProps?: {
    href: string;
    type: string;
    label: string;
  };
}>();
</script>
