<template>
  <div class="add-new-project">
    <form action="/" method="POST" enctype="multipart/form-data" @submit.prevent="handleSubmit">
      <v-text-field
        label="Image Title"
        v-model="name"
        required
        outlined
        placeholder="Name"
        name="name"
        :rules="[rules.required]"
      ></v-text-field>

      <v-textarea
        label="Image Description"
        v-model="description"
        required
        outlined
        placeholder="Description"
        name="desc"
        :rules="[rules.required]"
      ></v-textarea>

      <v-file-input label="Upload Image" v-model="image" accept="image/*" outlined name="image"></v-file-input>

      <v-btn type="submit" color="primary" :disabled="!isValid">Submit</v-btn>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useProjectStore } from '../../store/project';
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
    await projectStore.add({ name: name.value, desc: description.value, img: image.value });
    await router.push({ name: 'project-list' });
  }
};
</script>
