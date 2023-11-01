<template>
  <div class="blog-page">
    <div class="flex sm:space-x-24">
      <Suspense>
        <template #default>
          <router-view />
        </template>
        <template #fallback>
          <loading-spinner />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
</script>
