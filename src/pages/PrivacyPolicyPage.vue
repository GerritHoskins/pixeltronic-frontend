<template>
  <div class="q-pa-md">
    <h1>
      {{ pageTitle }}
    </h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  pageTitle: string;
}>();
</script>
