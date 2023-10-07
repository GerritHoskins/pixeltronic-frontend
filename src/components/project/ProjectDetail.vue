<template>
  <v-card>
    {{ router.currentRoute.value.params.id }}
  </v-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
