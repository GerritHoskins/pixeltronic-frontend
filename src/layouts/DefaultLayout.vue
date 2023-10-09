<template>
  <q-layout
    id="safeArea"
    view="lHh lpr lFf"
    container
    style="min-height: 100vh"
    class="default-layout shadow-2 rounded-borders"
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
        indicator-color="primary"
        class="text-grey-8"
      >
        <q-route-tab :ripple="false" :to="{ name: 'login' }">
          Login
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
<script setup lang="ts"></script>
