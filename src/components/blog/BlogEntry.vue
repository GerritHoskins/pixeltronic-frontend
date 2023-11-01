<template>
  <section class="blog-entry mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="fixed bottom-8 right-8 hidden flex-col gap-3 md:hidden">
      <button
        aria-label="Scroll To Top"
        class="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
      >
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <article>
      <div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
        <header class="py-6">
          <div class="space-y-1 text-center">
            <dl class="space-y-10">
              <div>
                <dt class="sr-only">Published on</dt>
                <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time datetime="2023-08-05T00:00:00.000Z">{{ timeAgo(entry.publishedOn) }}</time>
                </dd>
              </div>
            </dl>
            <div>
              <h1
                class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
              >
                {{ entry.title }}
              </h1>
            </div>
          </div>
        </header>
        <div class="flex flex-col sm:flex-row-reverse pb-8">
          <div
            class="divide-y sm:px-6 sm:pt-6 pb-6 divide-gray-200 dark:divide-gray-700 text-gray-700 dark:text-gray-300"
          >
            <p>{{ entry.description }}</p>
          </div>
          <div class="w-full">
            <div class="text-sm font-medium leading-5">
              <div class="py-4 xl:py-8 max-w-2xl w-full">
                <blog-tags title="Tags" :tags="entry.tags" :show-count="false" />
              </div>
              <div class="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                <div>
                  <h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Previous Article</h2>
                  <div class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    <a href="/blog/new-features-in-v1">New features in v1</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="pt-4 xl:pt-8">
              <a
                class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="Back to the blog"
                href="/blog"
                >← Back to the blog</a
              >
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import useBlogStore from '@/stores/blog';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import type { BlogEntry } from '@/types/Blog';
import { formatTimeAgo } from '@vueuse/core/index';
import BlogTags from '@/components/blog/BlogTags.vue';

const route = useRoute();
const postId: string = typeof route.params.id === 'string' ? route.params.id : '';

const blogStore = useBlogStore();
const entry = computed<BlogEntry>(() => blogStore.getBlogEntryBySlug(postId));
const timeAgo = (timestamp: string) => formatTimeAgo(new Date(timestamp));
</script>
