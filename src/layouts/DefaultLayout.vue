<template>
  <v-app
    class="default-layout tw-min-h-screen tw-shadow-inner tw-w-full tw-overflow-hidden tw-px-48 !tw-flex !tw-flex-col !tw-items-center !tw-justify-center !tw-bg-astral-500"
  >
    <v-app-bar
      elevation="0"
      density="comfortable"
      class="!tw-bg-astral-500 !tw-w-full"
      flat
      :order="order"
      height="260"
    >
      <div class="!tw-flex-col !tw-h-full !tw-flex !tw-w-full !tw-justify-center !tw-items-center">
        <title-bar />
        <v-btn
          v-model="order"
          hide-details
          inset
          elevation="1"
          id="menu-activator"
          width="120"
          size="small"
          color="black"
          class="!tw-normal-case !tw-text-black !tw-text-right !tw-mt-4"
        >
          Navigation
          <navigation-drawer sm-and-up />
        </v-btn>
      </div>
    </v-app-bar>
    <v-main class="!tw-bg-astral-500 !tw-text-astral-50 !tw-m-4 !tw-max-w-3xl">
      <slot name="main" />
    </v-main>

    <footer-component />
  </v-app>
</template>

<script setup lang="ts">
import FooterComponent from '../components/FooterComponent.vue'
import TitleBar from '../components/TitleBar.vue'
import NavigationDrawer from '../components/NavigationDrawer.vue'
import { ref } from 'vue'

const order = ref('0')
</script>
