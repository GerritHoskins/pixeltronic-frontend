<template>
  <div class="blog-page">
    <div class="flex sm:space-x-24">
      <!-- Blog Entries Section -->
      <Suspense>
        <template #default>
          <blog-entries :entries="entries" />
        </template>
        <template #fallback>
          <loading-spinner />
        </template>
      </Suspense>

      <!-- Blog Tags Section -->
      <Suspense>
        <template #default>
          <blog-tags :tags="countedTags" />
        </template>
        <template #fallback>
          <loading-spinner />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, watch } from 'vue';
import BlogTags from '@/components/blog/BlogTags.vue';
import BlogEntries from '@/components/blog/BlogEntries.vue';
import type { BlogEntry, Tag } from '@/types/Blog';
import useApi from '@/composables/useApi';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

// API fetch hooks
//const { blogPosts, error: blogError, fetch: fetchBlogEntries } = fetchBlogPosts();
//const { tags, error: tagError, fetch: fetchBlogTags } = fetchTags();

const { data: blogPosts, error: blogError, fetchBlogPosts } = useApi();
const { data: tags, error: tagError, fetchTags } = useApi();

const entries = reactive<BlogEntry[]>([]);
const countedTags = reactive<Tag[]>([]);

watch(blogPosts, newVal => {
  newVal?.data.forEach(entry => {
    entries.push({
      publishedOn: entry.attributes.publishedAt,
      title: entry.attributes.title,
      tags: entry.attributes.tags.data.map(tag => ({ label: tag.attributes.name })),
      description: entry.attributes.description,
      image: entry.attributes.image?.data?.attributes?.url,
    });
  });
});

watch(tags, newVal => {
  newVal?.data.forEach(tag => {
    countedTags.push({
      label: tag.attributes.name,
      count: tag.attributes?.articles?.data?.length,
    });
  });
});

const handleErrors = () => {
  [blogError, tagError].forEach(error => {
    if (error.value) console.log(error.value);
  });
};

onMounted(async () => {
  await Promise.all([fetchTags(), fetchBlogPosts()]);
  handleErrors();
});
</script>
