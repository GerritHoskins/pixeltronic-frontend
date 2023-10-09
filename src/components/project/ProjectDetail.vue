<template>
  <q-card>
    {{ router.currentRoute.value.params.id }}
  </q-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
