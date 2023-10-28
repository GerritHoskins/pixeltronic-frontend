<template>
  <div
    class="hidden blog-tags h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex"
  >
    <div class="px-6 py-4">
      <h3 class="font-bold uppercase text-primary-500">All Posts</h3>
      <ul>
        <li class="my-3" v-for="tag in tags" :key="tag.label">
          <router-link
            class="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
            :aria-label="tag.label"
            :to="{ path: `/tags/${tag.label}` }"
            >{{ tag.label }} ({{ tag.count }})</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  tags: Array<{
    label: string;
    count: number;
  }>;
}>();
</script>
