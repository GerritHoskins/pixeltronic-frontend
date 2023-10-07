<template>
  <v-slide-y-transition>
    <div class="!tw-text-astral-50 !tw-text-sm !tw-font-light">
      <v-breadcrumbs class="!tw-p-0">
        <v-breadcrumbs-item>{{ currentPage }}</v-breadcrumbs-item>
      </v-breadcrumbs>
    </div>
  </v-slide-y-transition>
</template>

<script lang="ts" setup>
defineProps<{ currentPage: string }>();
</script>
