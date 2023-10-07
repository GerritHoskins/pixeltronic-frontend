<template>
  <v-container class="projects-view !tw-font-light !tw-p-0">
    <v-row>
      <v-col cols="8">
        <router-view />
      </v-col>
      <v-col cols="4">
        <v-btn color="primary" :to="{ name: 'add-project' }">
          <span>Add project</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useProjectStore } from '../store/project';
import ProjectList from '@/components/project/ProjectList.vue';
import AddNewProject from '@/components/project/AddNewProject.vue';

const name = ref('');
const description = ref('');
const image = ref<File[] | undefined>();

const rules = {
  required: (value: string | File[]) => !!value || 'This field is required.',
};

const addProject = ref(false);

const isValid = computed(() => {
  return name.value && description.value && image.value;
});

const toggleAddProject = () => (addProject.value = true);

const projectStore = useProjectStore();
const handleSubmit = async () => {
  if (isValid.value) {
    await projectStore.add({ name: name.value, desc: description.value, img: image.value });
  }
};
</script>
