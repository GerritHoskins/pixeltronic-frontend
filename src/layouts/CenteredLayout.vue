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
    </v-app-bar>

    <v-navigation-drawer v-model="showDrawer" permanent floating color="background" location="bottom">
      <v-list
        class="tw-flex !tw-flex-col tw-items-center sm:tw-items-start"
        bg-color="background"
        density="compact"
        variant="plain"
      >
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-list-item
              class="!tw-font-light"
              base-color="text"
              :color="isHovering ? 'text' : 'primary'"
              active-class="!tw-font-bold"
              variant="plain"
              link
              v-for="(item, index) in items"
              :key="index"
              :value="index"
              :to="{ name: item.to }"
              >{{ item.title }}</v-list-item
            >
          </template>
        </v-hover>
      </v-list>
    </v-navigation-drawer>

    <v-main color="background" class="!tw-text-sm !tw-min-h-[calc(100vh -70px)]">
      <slot name="main" />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const showDrawer = ref(false);

const toggleDrawer = () => {
  showDrawer.value = !showDrawer.value;
};

const items = [
  { title: 'Home', to: 'home' },
  { title: 'About', to: 'about' },
  { title: 'Projects', to: 'project-list' },
  { title: 'Logout', to: 'login' },
];
</script>

<style scoped>
#safeArea {
  margin: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px)
    env(safe-area-inset-left, 0px) !important;
}
</style>
