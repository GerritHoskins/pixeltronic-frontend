<template>
  <v-app full-height class="tw-w-full" :class="backgroundColor">
    <component :is="layout">
      <template #header>
        <title-bar />
      </template>
      <template #navigation="{ smAndUp }">
        <navigation-drawer :sm-and-up="smAndUp" />
      </template>
      <template #breadcrumb>
        <bread-crumb :current-page="currentPage" />
      </template>
      <template #main>
        <router-view v-slot="{ Component }">
          <page-transition>
            <component :is="Component" />
          </page-transition>
        </router-view>
      </template>
    </component>
    <footer-component />
  </v-app>
</template>

<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router';
import './assets/main.css';
import { onBeforeMount, provide, ref, shallowRef } from 'vue';
import layouts from './layouts/layouts';
import PageTransition from './layouts/transitions/PageTransition.vue';
import FooterComponent from './components/FooterComponent.vue';
import TitleBar from './components/TitleBar.vue';
import NavigationDrawer from './components/NavigationDrawer.vue';
import BreadCrumb from './components/BreadCrumb.vue';

import { useDisplay } from 'vuetify';

const { smAndUp } = useDisplay();
const layout = shallowRef('div');
const currentPage = ref('home');
const backgroundColor = ref('');

const router = useRouter();
router.afterEach((to) => {
  const layoutName = (to.meta?.layout as string) || 'CenteredLayout';
  layout.value = layouts[layoutName] || 'CenteredLayout';
  currentPage.value = (to?.meta?.title as string) ?? '';
});

router.beforeEach((to, from, next) => {
  currentPage.value = '';
  next();
});

const changeBackgroundColor = () => {
  //const colors = ['!tw-bg-astral-50', '!tw-bg-astral-500']
  const colors = ['!tw-bg-astral-50'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  backgroundColor.value = colors[randomIndex];
};

onBeforeMount(() => {
  changeBackgroundColor();
});

provide('app:layout', layout);
</script>
