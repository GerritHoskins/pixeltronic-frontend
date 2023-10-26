<template>
  <div class="q-pa-md project-page">
    <page-header>{{ pageTitle }}</page-header>
    <router-link :to="{ name: 'add-project' }" />
    <div class="q-pt-md">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import PageHeader from '@/components/common/PageHeader.vue';

defineProps<{
  pageTitle: string;
}>();
</script>
