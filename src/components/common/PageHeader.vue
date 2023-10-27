<template>
  <div class="page-header space-y-2 pb-8 pt-6 md:space-y-5">
    <h1
      class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
    >
      {{ title }}
    </h1>
    <p v-if="subTitle" class="text-lg leading-7 text-gray-500 dark:text-gray-400">{{ subTitle }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const router = useRouter();
const title = computed(() => {
  return router.currentRoute.value.meta?.title ?? router.currentRoute.value.name;
});
const subTitle = computed(() => {
  return router.currentRoute.value.meta?.contentTitle ?? router.currentRoute.value.name;
});
</script>
