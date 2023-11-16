<template>
  <div
    class="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0"
  >
    <div class="space-x-2 pb-8 pt-6 md:space-y-5">
      <h1
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14"
      >
        Tags
      </h1>
    </div>
    <div class="flex max-w-lg flex-wrap">
      <tag v-for="tag in tags" :key="tag.label" :tag="tag" />
    </div>
  </div>
</template>

<script setup lang="ts">
import useApi from '@/composables/useApi';
import type { TagResponse } from '@/composables/useApi';
import { onMounted, reactive, watch } from 'vue';
import type { Tag as TagItem } from '@/types/Blog';
import Tag from '@/components/tags/TagComponent.vue';

const { data, error, fetchTags } = useApi();

const tags = reactive<TagItem[]>([]);

watch(data, newVal => {
  newVal?.data.forEach(tag => {
    tags.push({
      label: (tag as TagResponse).attributes.name,
      count: (tag as TagResponse).attributes?.articles?.data?.length,
    });
  });
});

const handleErrors = () => {
  if (error.value) console.log(error.value);
};

onMounted(async () => {
  await fetchTags();
  handleErrors();
});
</script>
