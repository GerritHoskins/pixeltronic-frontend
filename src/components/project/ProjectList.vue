<template>
  <v-list class="project-list" lines="two" bg-color="background">
    <v-list-item
      min-height="80"
      v-for="project in projects"
      :key="project.name"
      :title="project.name"
      :subtitle="project.desc"
      :prepend-avatar="project.img"
      :to="{ name: 'project', params: { id: project.name } }"
    ></v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useProjectStore } from '../../store/project';

const projectStore = useProjectStore();

onMounted(async () => {
  await projectStore.all();
});
const projects = computed(() => projectStore.projectList);
</script>
