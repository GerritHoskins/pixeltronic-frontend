<template>
  <v-footer
    color="background"
    class="tw-flex tw-flex-col !tw-text-xs !tw-font-light !tw-w-full !tw-p-0"
    app
  >
    <v-list class="!tw-flex !tw-flex-row" bg-color="background" density="compact" variant="text">
      <v-list-item
        link
        class="!tw-font-light"
        variant="text"
        density="compact"
        :to="{ name: 'privacy-policy' }"
        >Privacy policy</v-list-item
      >
      <v-list-item
        link
        class="!tw-font-light"
        variant="text"
        density="compact"
        :to="{ name: 'terms-of-use' }"
        >Terms of use</v-list-item
      >
    </v-list>
    {{ new Date().getFullYear() }} — pixeltronic.dev
  </v-footer>
</template>
<script setup lang="ts"></script>
