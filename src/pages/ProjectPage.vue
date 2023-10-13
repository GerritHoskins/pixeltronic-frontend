<template>
  <div class="q-pa-md project-page">
    <page-header>{{ pageTitle }}</page-header>
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
import PageHeader from 'components/common/PageHeader.vue';

defineProps<{
  pageTitle: string;
}>();
</script>
