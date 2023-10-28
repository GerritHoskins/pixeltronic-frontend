<template>
  <div class="blog-page">
    <div class="pb-6 pt-6" />
    <div class="flex sm:space-x-24">
      <blog-entries :entries="entries" />
      <blog-tags :tags="countedTags" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import BlogTags from '@/components/blog/BlogTags.vue';
import type { BlogEntry } from '@/types/Blog';
import BlogEntries from '@/components/blog/BlogEntries.vue';

const tags = [
  {
    label: 'writings',
    to: '/tags/writings',
  },
  {
    label: 'writings',
    to: '/tags/writings',
  },
  {
    label: 'writings',
    to: '/tags/writings',
  },
  {
    label: 'tailwind',
    to: '/tags/tailwind',
  },
  {
    label: 'tailwind',
    to: '/tags/tailwind',
  },
  {
    label: 'tailwind',
    to: '/tags/tailwind',
  },
  {
    label: 'vu3',
    to: '/tags/vue3',
  },
  {
    label: 'github',
    to: '/tags/github',
  },
  {
    label: 'github',
    to: '/tags/github',
  },
];

const entries: BlogEntry[] = [
  {
    publishedOn: '2023-09-05T00:00:00.000Z',
    title: 'Vue 3 Composition API',
    tags: tags,
    description:
      'Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1.',
  },
  {
    publishedOn: '2023-08-05T00:00:00.000Z',
    title: 'New features in v1',
    tags: tags,
    description:
      'An overview of the new features released in v1 - code block copy, multiple authors, frontmatter layout and more',
  },
  {
    publishedOn: '2023-08-05T00:00:00.000Z',
    title: 'Introducing Multi-part Posts with Nested Routing',
    tags: tags,
    description:
      'The blog template supports posts in nested sub-folders. This can be used to group posts of similar content e.g. a multi-part course. This post is itself an example of a nested route!',
  },
  {
    publishedOn: '2020-03-09T00:00:00.000Z',
    title: 'Deriving the OLS Estimator',
    tags: tags,
    description:
      'Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1.',
  },
  {
    publishedOn: '2021-01-05T00:00:00.000Z',
    title: 'Vue 3 Composition API',
    tags: tags,
    description:
      'Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1.',
  },
];

const countedTags = computed(() => {
  const counted = tags.reduce(
    (acc, tag) => {
      if (acc[tag.label]) {
        acc[tag.label] += 1;
      } else {
        acc[tag.label] = 1;
      }
      return acc;
    },
    {} as Record<string, number>
  );

  return Object.entries(counted).map(([label, count]) => ({
    label,
    count,
  }));
});
</script>
