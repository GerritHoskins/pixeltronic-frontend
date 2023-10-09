<template>
  <q-layout
    id="safeArea"
    view="lHh lpr lFf"
    container
    style="min-height: 100vh"
    class="authenticated-layout shadow-2 rounded-borders"
  >
    <q-header bordered class="bg-grey-3 text-grey-8">
      <q-toolbar>
        <q-toolbar-title class="text-center"> pixeltronic.dev </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer bordered class="bg-grey-3">
      <q-tabs
        switch-indicator
        narrow-indicator
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey-8"
        v-model="tab"
      >
        <q-route-tab :ripple="false" :to="{ name: 'blog' }">
          Interesting reads
        </q-route-tab>
        <q-route-tab :ripple="false" :to="{ name: 'projects' }">
          Things I've built
        </q-route-tab>
        <q-route-tab :ripple="false" :to="{ name: 'privacy-policy' }">
          Privacy policy
        </q-route-tab>
        <q-route-tab :ripple="false" :to="{ name: 'terms-of-use' }">
          Terms of use
        </q-route-tab>
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
#safeArea {
  margin: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px)
    env(safe-area-inset-bottom, 0px) env(safe-area-inset-left, 0px) !important;
}
</style>
<script setup lang="ts">
import { ref } from 'vue';
const tab = ref('');
</script>
