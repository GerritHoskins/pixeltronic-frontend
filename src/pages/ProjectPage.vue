<template>
  <div class="project-page divide-y divide-gray-200 dark:divide-gray-700">
    <page-header />
    <div class="container py-12">
      <div class="-m-4 flex flex-wrap">
        <div
          v-for="post in projectPosts"
          :key="post.title"
          class="flex flex-row md:max-w-[26rem] m-[1.5rem] w-full flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex"
        >
          <div class="h-full overflow-hidden rounded-md">
            <a target="_blank" rel="noopener noreferrer" :href="post.href" aria-label="Link to A Search Engine"
              ><img
                alt="A Search Engine"
                loading="lazy"
                width="544"
                height="306"
                decoding="async"
                data-nimg="1"
                class="object-cover object-center md:h-36 lg:h-48"
                srcset="
                  /_next/image?url=%2Fstatic%2Fimages%2Fgoogle.png&amp;w=640&amp;q=75  1x,
                  /_next/image?url=%2Fstatic%2Fimages%2Fgoogle.png&amp;w=1200&amp;q=75 2x
                "
                :src="post.src"
                style="color: transparent"
            /></a>
            <div class="p-6">
              <h2 class="mb-3 text-2xl font-bold leading-8 tracking-tight">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com"
                  aria-label="Link to A Search Engine"
                  >{{ post.title }}</a
                >
              </h2>
              <p class="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                {{ post.description }}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com"
                class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="Link to A Search Engine"
                >Learn more →</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PageHeader from '@/components/common/PageHeader.vue';
import type { ProjectPost } from '@/types/Project';

const projectPosts: ProjectPost[] = [
  {
    href: 'https://www.google.com',
    src: '/static/images/google.png',
    title: 'Google',
    description:
      "What if you could look up any information in the world? Webpages, images, videos and more. Google has many features to help you find exactly what you're looking for.",
  },
  {
    href: 'https://www.google.com',
    src: '/static/images/google.png',
    title: 'Google',
    description:
      "What if you could look up any information in the world? Webpages, images, videos and more. Google has many features to help you find exactly what you're looking for.",
  },
  {
    href: 'https://www.google.com',
    src: '/static/images/google.png',
    title: 'Google',
    description:
      "What if you could look up any information in the world? Webpages, images, videos and more. Google has many features to help you find exactly what you're looking for.",
  },
  {
    href: 'https://www.google.com',
    src: '/static/images/google.png',
    title: 'Google',
    description:
      "What if you could look up any information in the world? Webpages, images, videos and more. Google has many features to help you find exactly what you're looking for.",
  },
];
</script>
