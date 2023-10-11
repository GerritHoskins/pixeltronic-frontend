<template>
  <q-form
    action="/"
    class="add-new-project"
    enctype="multipart/form-data"
    method="POST"
    @submit.prevent="handleSubmit"
  >
    <q-input
      v-model="name"
      :rules="[rules.required]"
      label="Image Title"
      name="name"
      outlined
      placeholder="Name"
      required
    ></q-input>

    <q-input
      v-model="description"
      :rules="[rules.required]"
      label="Image Description"
      name="desc"
      outlined
      placeholder="Description"
      required
    ></q-input>

    <q-file
      id="file"
      v-model="file"
      accept="image/*"
      label="Upload Image"
      name="file"
      outlined
    ></q-file>

    <q-btn :disabled="!isValid" color="primary" type="submit">Submit</q-btn>
  </q-form>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useProjectStore } from '../../stores/project';
import { useRouter } from 'vue-router';

const name = ref('');
const description = ref('');
const file = ref<File[] | undefined>('');

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
      file: file.value,
    });
    await router.push({ name: 'projects' });
  }
};
</script>