<template>
  <div class="blog-tag">
    <h3 class="font-bold text-xs uppercase text-gray-500">{{ title }}</h3>
    <component :is="showCount ? 'ul' : 'div'" :class="{ 'flex flex-row  flex-wrap': !showCount }">
      <component :is="showCount ? 'li' : 'div'" :class="{ 'my-3': showCount }" v-for="tag in tags" :key="tag.label">
        <router-link
          class="py-2 text-sm font-medium uppercase text-primary-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
          :class="showCount ? 'px-3' : 'px-1'"
          :aria-label="tag.label"
          :to="{ path: `/tags/${tag.label}` }"
          >{{ tag.label }} {{ showCount ? `(${tag.count})` : '' }}</router-link
        >
      </component>
    </component>
  </div>
</template>

<script setup lang="ts">
import type { Tag } from '@/types/Blog';

defineProps<{
  tags: Array<Tag>;
  title: string;
  showCount: boolean;
}>();
</script>
