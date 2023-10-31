<template>
  <div class="tag mb-2 mr-5 mt-2">
    <a
      class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      :href="`/tags/${tag.label}`"
      >{{ tag.label }}
      <span class="ml-1 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">({{ tag.count }})</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { Tag } from '@/types/Blog';

defineProps<{
  tag: Tag;
}>();
</script>
