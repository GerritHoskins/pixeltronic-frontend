<template>
  <div>
    {{ router.currentRoute.value.params.id }}
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
