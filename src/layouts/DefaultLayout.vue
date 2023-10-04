<template>
  <v-layout id="safeArea">
    <v-app-bar :elevation="1" border="false" color="primary" density="compact">
      <v-app-bar-title>
        <div class="!tw-flex !tw-flex-row !tw-items-center">
          <slot name="header" />
        </div>
      </v-app-bar-title>
    </v-app-bar>

    <v-main class="!tw-text-sm" color="background">
      <slot name="main" />
    </v-main>
    <slot name="footer" />
  </v-layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const order = ref("0");
</script>