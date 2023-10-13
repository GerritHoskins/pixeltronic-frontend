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
        <q-toolbar-title class="text-center" aria-label="Website Name">
          pixeltronic.dev
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer bordered class="bg-grey-3">
      <q-tabs
        switch-indicator
        no-caps
        active-color="primary"
        indicator-color="primary"
        class="text-grey-8"
        v-model="tab"
      >
        <q-route-tab
          v-for="tabItem in tabs"
          :key="tabItem.to.path"
          :to="tabItem.to"
          :label="tabItem.label"
          :ripple="false"
          :aria-label="`Navigate to ${tabItem.label}`"
        />
        <q-tab>
          <q-icon name="dark" />
        </q-tab>
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          mode="out-in"
        >
          <q-page padding>
            <q-page-sticky position="bottom-right" :offset="fabPos">
              <q-fab
                square
                :ripple="false"
                dense
                flat
                direction="up"
                vertical-actions-align="right"
                color="grey-3"
                class="bg-primary"
                icon="menu"
                :disable="draggingFab"
                v-touch-pan.prevent.mouse="moveFab"
              >
                <q-fab-action
                  v-for="fabItem in fabs"
                  :key="fabItem.label"
                  :to="fabItem.to"
                  :label="fabItem.label"
                  hide-icon
                  flat
                  dense
                  label-position="right"
                  square
                  :disable="draggingFab"
                  :color="
                    router.currentRoute.value.name === fabItem.to.name
                      ? 'white'
                      : 'grey-3'
                  "
                  :class="
                    router.currentRoute.value.name === fabItem.to.name
                      ? 'bg-primary'
                      : 'bg-grey-3 text-grey-8'
                  "
                />
              </q-fab>
            </q-page-sticky>
            <component :is="Component" :page-title="pageTitle" />
          </q-page>
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { allNavigationRoutes } from 'src/router/routes';

const fabPos = ref([18, 18]);
const draggingFab = ref(false);

const moveFab = (ev) => {
  draggingFab.value = ev.isFirst !== true && ev.isFinal !== true;
  fabPos.value = [fabPos.value[0] - ev.delta.x, fabPos.value[1] - ev.delta.y];
};

const fabs = computed(() => {
  if (!Array.isArray(allNavigationRoutes)) return [];

  return allNavigationRoutes
    .filter((route) => route.meta?.floatingMenu)
    .map((route) => {
      return {
        to: route,

        label: route.meta?.contentTitle || route.meta.title || route.name,
      };
    });
});

const tab = ref(allNavigationRoutes[0]?.path || '');
const tabs = computed(() => {
  if (!Array.isArray(allNavigationRoutes)) return [];

  return allNavigationRoutes
    .filter((route) => route.meta?.footerMenu)
    .map((route) => {
      return {
        to: route,
        label: route.meta?.contentTitle || route.meta.title || route.name,
      };
    });
});
const router = useRouter();
const pageTitle = computed(() => {
  return (
    router.currentRoute.value.meta?.contentTitle ||
    router.currentRoute.value.meta?.title
  );
});
</script>

<style scoped lang="scss">
#safeArea {
  margin: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px)
    env(safe-area-inset-bottom, 0px) env(safe-area-inset-left, 0px);
}
</style>
