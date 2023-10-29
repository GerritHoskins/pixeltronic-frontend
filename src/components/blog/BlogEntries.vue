<template>
  <div class="blog-entries">
    <ul>
      <li v-for="entry in entries" :key="entry.title" class="py-5">
        <article class="flex flex-col space-y-2 xl:space-y-0">
          <dl>
            <dt class="sr-only">Published on</dt>
            <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time datetime="2023-08-05T00:00:00.000Z">{{ timeAgo(entry.publishedOn) }}</time>
            </dd>
          </dl>
          <div class="space-y-3">
            <div>
              <h2 class="text-2xl font-bold leading-8 tracking-tight">
                <a class="text-gray-900 dark:text-gray-100" href="#">{{ entry.title }}</a>
              </h2>
              <div class="flex flex-wrap">
                <a
                  v-for="tag in entry.tags"
                  :key="tag.label"
                  class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  :href="`/tags/${tag.label}`"
                  >{{ tag.label }}</a
                >
              </div>
            </div>
            <div class="prose max-w-none text-gray-500 dark:text-gray-400">
              {{ entry.description }}
            </div>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { formatTimeAgo } from '@vueuse/core';
import type { BlogEntry } from '@/types/Blog';
defineProps<{
  entries: BlogEntry[];
}>();

const timeAgo = (timestamp: string) => formatTimeAgo(new Date(timestamp)); // string
</script>
