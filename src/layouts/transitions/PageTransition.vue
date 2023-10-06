<template>
  <div class="page-transition">
    <v-slide-x-transition v-if="smAndUp" mode="out-in">
      <slot></slot>
    </v-slide-x-transition>
    <v-slide-x-reverse-transition v-else mode="out-in">
      <slot></slot>
    </v-slide-x-reverse-transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDisplay } from 'vuetify';
const { smAndUp } = useDisplay();

const transition = computed(() => {
  return smAndUp ? 'v-slide-x-transition' : 'v-slide-x-reverse-transition';
});
</script>
