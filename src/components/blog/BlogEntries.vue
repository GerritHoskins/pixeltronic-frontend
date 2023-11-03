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
                <router-link class="text-gray-900 dark:text-gray-100" :to="{ path: `/blog/${entry.slug}` }">{{
                  entry.title
                }}</router-link>
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

    <pagination-component />
  </div>
  <div
    class="hidden blog-tags h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex"
  >
    <div class="px-6 py-4">
      <blog-tags :tags="countedTags" :title="'All Posts'" show-count />
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatTimeAgo } from '@vueuse/core';
import type { BlogEntry, Tag } from '@/types/Blog';
import useBlogStore from '@/stores/blog';
import { computed } from 'vue';
import BlogTags from '@/components/blog/BlogTags.vue';
import PaginationComponent from '@/components/common/PaginationComponent.vue';

const blogStore = useBlogStore();
const entries = computed<BlogEntry[]>(() => blogStore.blogEntries || []);
const countedTags = computed<Tag[]>(() => blogStore.tags || []);

const timeAgo = (timestamp: string) => formatTimeAgo(new Date(timestamp));
</script>
