<template>
  <div class="q-pa-md project-page">
    <h1>
      {{ pageTitle }}
    </h1>
    <q-btn
      :ripple="false"
      label="Add new project"
      no-caps
      color="primary"
      :to="{ name: 'add-project' }"
    />
    <div class="q-pt-md">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  pageTitle: string;
}>();
</script>
