<template>
  <div class="q-pa-md col items-start q-gutter-md">
    <q-card
      v-for="project in projects"
      :key="project.name"
      dark
      bordered
      class="bg-grey-3 text-grey-8"
    >
      <q-card-section avatar>
        <q-avatar>
          <img :src="project.img" />
        </q-avatar>
      </q-card-section>

      <q-card-section>
        <div class="text-h6">{{ project.name }}</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        {{ project.desc }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useProjectStore } from '../../stores/project';
const projectStore = useProjectStore();

onMounted(async () => {
  await projectStore.all();
});
const projects = computed(() => projectStore.projectList);
</script>
