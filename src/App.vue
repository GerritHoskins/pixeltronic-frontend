<template>
  <div class="app mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <section class="flex h-screen flex-col justify-between font-sans">
      <component :is="layout">
        <router-view />
      </component>
    </section>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, shallowRef } from 'vue';
import { useRouter } from 'vue-router';
import { useDark, useToggle } from '@vueuse/core';
import layouts from '@/layouts/layouts';

const layout = shallowRef('div');
const currentPage = ref('');

const isDark = useDark();
onMounted(async () => {
  await nextTick();
  document.getElementsByTagName('html')[0].classList.add('dark');
  useToggle(isDark);
});

const router = useRouter();
router.afterEach(to => {
  const layoutName = (to.meta?.layout as string) || 'DefaultLayout';
  layout.value = (layouts[layoutName] as string) || 'DefaultLayout';
  currentPage.value = (to?.meta?.title as string) ?? '';
});

router.beforeEach((to, from, next) => {
  currentPage.value = '';
  next();
});
</script>
