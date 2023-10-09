<template>
  <q-page padding>
    <div class="q-pa-md">
      <h1>
        {{ pageTitle }}
      </h1>
    </div>
  </q-page>
</template>

<script setup lang="ts">
defineProps<{
  pageTitle: string;
}>();
</script>
