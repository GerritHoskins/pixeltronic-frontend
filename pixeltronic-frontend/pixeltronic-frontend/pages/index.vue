<template>
  <div>
    <NuxtLayout name="authenticated">
      <template #header> Some header template content. </template>

      Blog
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>
