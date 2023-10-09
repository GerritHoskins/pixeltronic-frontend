<template>
  <router-view />
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import { useRouter } from 'vue-router';
import layouts from 'layouts/layouts';

const layout = shallowRef('div');
const currentPage = ref('');

const router = useRouter();
router.afterEach((to) => {
  const layoutName = (to.meta?.layout as string) || 'AuthenticatedLayout';
  layout.value = (layouts[layoutName] as string) || 'AuthenticatedLayout';
  currentPage.value = (to?.meta?.title as string) ?? '';
});

router.beforeEach((to, from, next) => {
  currentPage.value = '';
  next();
});
</script>
