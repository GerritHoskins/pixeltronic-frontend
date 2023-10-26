<template>
  <div class="row add-new-project">
    <form @submit.prevent="handleSubmit" class="">
      <input v-model="name" name="name" placeholder="Title" required />
      <input v-model="description" name="desc" placeholder="Description" required />
      <input type="file" name="file" @change="setFile($event as CustomEvent)" />
      <div v-if="file">{{ file.name }}</div>
      <button :disabled="!isValid" type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { ProjectAddRequestParams, useProjectStore } from '@/stores/project';
import { useRouter } from 'vue-router';

const name = ref('');
const description = ref('');
const file = ref<File | undefined>();

const isValid = computed(() => {
  return name.value && description.value && (!file.value || (file.value && file.value?.name));
});

const projectStore = useProjectStore();
const router = useRouter();
const handleSubmit = async () => {
  if (isValid.value) {
    const data: ProjectAddRequestParams = {
      name: name.value,
      desc: description.value,
      file: null,
      fileName: '',
    };

    if (file.value) {
      data.file = file.value;
      data.fileName = file.value.name;
    }

    await projectStore.add(data);
    await router.push({ name: 'projects' });
  }
};

const setFile = (payload: CustomEvent) => {
  const target = payload.target as HTMLInputElement;
  target.files && target.files.length && (file.value = target.files[0]);
};
</script>
