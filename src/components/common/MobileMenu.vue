<template>
  <div ref="menu">
    <button aria-label="Toggle Menu" class="sm:hidden" @click="toggleOverlayMenu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-8 w-8 text-gray-900 dark:text-gray-100"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>

    <div
      :class="isToggled ? 'translate-x-0' : 'translate-x-full'"
      class="fixed !ml-[50%] sm:!ml-[inherit] left-0 top-0 z-10 h-full w-full transform bg-white opacity-95 duration-300 ease-in-out dark:bg-gray-950 dark:opacity-[0.98]"
    >
      <nav class="fixed mt-8 h-full">
        <div class="px-12 py-4" v-for="navItem in items" :key="navItem.name">
          <router-link
            class="text-2xl text-gray-900 dark:text-gray-100"
            :to="{ name: navItem.name }"
            :aria-label="`Navigate to ${navItem.contentTitle}`"
          >
            {{ navItem.label }}
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavigationRouterLink } from '@/types/Navigation';
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

defineProps<{
  items: NavigationRouterLink[];
}>();

const isToggled = ref(false);
const toggleOverlayMenu = () => {
  isToggled.value = !isToggled.value;
};

const menu = ref(null);
onClickOutside(menu, event => {
  console.log(event);
  toggleOverlayMenu();
});

const router = useRouter();
router.afterEach(() => {
  isToggled.value = false;
});
</script>
