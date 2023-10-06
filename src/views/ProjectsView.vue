<template>
  <v-container class="projects-view !tw-font-light">
    <v-row>
      <v-col cols="12">
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

          <v-file-input
            label="Upload Image"
            v-model="image"
            required
            outlined
            name="image"
            :rules="[rules.required]"
          ></v-file-input>

          <v-btn type="submit" color="primary" :disabled="!isValid">Submit</v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useProjectStore } from '../stores/project';

const name = ref('');
const description = ref('');
const image = ref(null);

const rules = {
  required: (value: string | File) => !!value || 'This field is required.',
};

const isValid = computed(() => {
  return name.value && description.value && image.value;
});

const projectStore = useProjectStore();
const handleSubmit = async () => {
  if (isValid.value) {
    await projectStore.add({ name: name.value, desc: description.value, img: image.value });
  }
};
</script>
