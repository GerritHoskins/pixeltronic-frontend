<template>
  <div class="project-page divide-y divide-gray-200 dark:divide-gray-700">
    <page-header />
    <Suspense>
      <template #default>
        <div class="container py-12">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div v-for="project in projectPosts" :key="project.title" class="">
              <project-tile :project="project" />
            </div>
          </div>
        </div>
      </template>
      <template #fallback>
        <loading-spinner />
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts" setup>
import PageHeader from '@/components/common/PageHeader.vue';
import type { ProjectPost } from '@/types/Project';
import { onMounted, reactive, watch } from 'vue';
import useApi from '@/composables/useApi';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import ProjectTile from '@/components/project/ProjectTile.vue';

// API fetch hooks
const { data: projects, error: projectError, fetchProjects } = useApi();

const projectPosts = reactive<ProjectPost[]>([]);

const getApiFilePath = (filename: string) => `${import.meta.env.VITE_API_BASE_URL}/strapi${filename}`;

watch(projects, newVal => {
  newVal?.data.forEach(project => {
    projectPosts.push({
      link: `${import.meta.env.VITE_API_BASE_URL}/${project.id}`,
      image: project.attributes?.image?.data?.attributes?.url
        ? getApiFilePath(project.attributes.image.data.attributes.url)
        : '',
      title: project.attributes.name,
      description: project.attributes.description,
      status: project.attributes.status,
      postedAt: project.attributes.publishedAt,
    });
  });
});

const handleErrors = () => {
  [projectError].forEach(error => {
    if (error.value) console.log(error.value);
  });
};

onMounted(async () => {
  await fetchProjects();
  handleErrors();
});
</script>
