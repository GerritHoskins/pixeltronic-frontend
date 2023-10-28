<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { shallowRef, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const layoutComponent = shallowRef('DefaultLayout');

watch(
  route,
  to => {
    if (to.meta.layout) {
      import(`../../layouts/${capitalizeFirstLetter(to.meta.layout)}.vue`).then(module => {
        layoutComponent.value = module.default;
      });
    }
  },
  { immediate: true }
);

function capitalizeFirstLetter(layoutName: string) {
  return layoutName.charAt(0).toUpperCase() + layoutName.slice(1);
}
</script>
