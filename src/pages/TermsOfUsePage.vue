<template>
  <div class="q-pa-md">
    <page-header>{{ pageTitle }}</page-header>
  </div>
</template>

<script setup lang="ts">
import PageHeader from 'components/common/PageHeader.vue';

defineProps<{
  pageTitle: string;
}>();
</script>
