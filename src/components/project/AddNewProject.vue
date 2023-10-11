<template>
  <div class="row add-new-project">
    <q-form
      @submit.prevent="handleSubmit"
      class="q-gutter-md col-xs-12 col-md-6 col-lg-4"
    >
      <q-input
        dense
        v-model="name"
        :rules="[rules.required]"
        label="Title"
        name="name"
        filled
        placeholder="Title"
        required
      />
      <q-input
        dense
        v-model="description"
        :rules="[rules.required]"
        label="Description"
        name="desc"
        filled
        placeholder="Description"
        required
      />
      <q-file
        dense
        type="file"
        name="file"
        v-model="file"
        filled
        label="File name"
      />
      <div v-if="file">{{ file.name }}</div>
      <q-btn
        :ripple="false"
        no-caps
        :disabled="!isValid"
        color="primary"
        type="submit"
        >Submit</q-btn
      >
    </q-form>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { ProjectAddRequestParams, useProjectStore } from '../../stores/project';
import { useRouter } from 'vue-router';

const name = ref('');
const description = ref('');
const file = ref<File | undefined>();

const rules = {
  required: (value: string) => !!value || 'This field is required.',
};

const isValid = computed(() => {
  return (
    name.value &&
    description.value &&
    (!file.value || (file.value && file.value?.name))
  );
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
</script>
