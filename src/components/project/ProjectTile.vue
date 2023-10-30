<template>
  <div
    class="flex flex-row w-full max-h-[590px] flex-wrap overflow-auto rounded bg-gray-50 shadow-md dark:bg-gray-800/70 dark:shadow-gray-700/40 sm:flex"
  >
    <div class="h-full overflow-hidden rounded-md">
      <a target="_blank" rel="noopener noreferrer" :href="project.link" aria-label="Link to A Search Engine"
        ><img
          :alt="project.title"
          loading="lazy"
          class="object-contain w-full object-center md:h-36 lg:h-48"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/jjgg9IAAAAASUVORK5CYII="
          :srcset="project.image"
          style="color: transparent"
      /></a>
      <div class="p-6">
        <h2 class="mb-3 text-2xl font-bold leading-8 tracking-tight">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com"
            aria-label="Link to A Search Engine"
            >{{ project.title }}</a
          >
        </h2>
        <p class="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
          {{ project.description }}
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          :href="project.link"
          class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          :aria-label="project.title + ' (opens in a new window)'"
          >Learn more →</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectPost } from '@/types/Project';

defineProps<{
  project: ProjectPost;
}>();
</script>
