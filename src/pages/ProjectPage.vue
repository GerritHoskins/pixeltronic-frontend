<template>
  <div class="q-pa-md project-page">
    <page-header>{{ pageTitle }}</page-header>
  </div>
</template>

<script lang="ts" setup>
import PageHeader from '@/components/common/PageHeader.vue';

defineProps<{
  pageTitle: string;
}>();
</script>
