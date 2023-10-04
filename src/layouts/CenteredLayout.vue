<template>
  <v-layout id="safeArea">
    <v-app-bar :elevation="1" color="primary" border="false" density="compact">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="toggleDrawer" />
      </template>

      <v-app-bar-title>
        <div class="!tw-flex !tw-flex-row !tw-items-center">
          <slot name="header" />
          <!-- <slot name="breadcrumb" /> -->
        </div>
      </v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="showDrawer"
      floating
      absolute
      color="background"
      border="0"
      :location="smAndUp ? 'left' : 'top'"
    >
      <v-list class="tw-flex tw-flex-col">
        <v-list-item
          class="!tw-font-light"
          active-class="!tw-bg-astral-50 !tw-text-astral-700"
          variant="text"
          :ripple="false"
          link
          v-for="(item, index) in items"
          :key="index"
          :value="index"
          :to="{ name: item.to }"
          >{{ item.title }}</v-list-item
        >
      </v-list>
    </v-navigation-drawer>

    <v-main color="background" class="!tw-text-sm">
      <slot name="main" />
    </v-main>
    <slot name="footer" />
  </v-layout>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { ref } from 'vue'

const { smAndUp } = useDisplay()
const showDrawer = ref(false)

const toggleDrawer = () => {
  showDrawer.value = !showDrawer.value
}

const items = [
  { title: 'Home', to: 'home' },
  { title: 'About', to: 'about' },
  { title: 'Projects', to: 'projects' },
  { title: 'Login', to: 'login' }
]
</script>

<style scoped>
#safeArea {
  margin: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px)
    env(safe-area-inset-bottom, 0px) env(safe-area-inset-left, 0px) !important;
}
</style>
