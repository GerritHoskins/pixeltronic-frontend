<template>
  <q-form
    action="/"
    method="POST"
    class="add-new-project"
    enctype="multipart/form-data"
    @submit.prevent="handleSubmit"
  >
    <q-input
      label="Image Title"
      v-model="name"
      required
      outlined
      placeholder="Name"
      name="name"
      :rules="[rules.required]"
    ></q-input>

    <q-input
      label="Image Description"
      v-model="description"
      required
      outlined
      placeholder="Description"
      name="desc"
      :rules="[rules.required]"
    ></q-input>

    <q-file
      label="Upload Image"
      v-model="image"
      accept="image/*"
      outlined
      id="file"
      name="file"
    ></q-file>

    <q-btn type="submit" color="primary" :disabled="!isValid">Submit</q-btn>
  </q-form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useProjectStore } from '../../stores/project';
import { useRouter } from 'vue-router';

const name = ref('');
const description = ref('');
const image = ref<File[] | undefined>();

const rules = {
  required: (value: string) => !!value || 'This field is required.',
};

const isValid = computed(() => {
  return name.value && description.value;
});

const projectStore = useProjectStore();
const router = useRouter();
const handleSubmit = async () => {
  if (isValid.value) {
    await projectStore.add({
      name: name.value,
      desc: description.value,
      file: image.value,
    });
    await router.push({ name: 'project-list' });
  }
};
</script>
