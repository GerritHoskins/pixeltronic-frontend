<template>
  <icon-wrapper :svg-props="svgProps">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="text-gray-900 dark:text-gray-100"
      :width="svgProps?.width"
      :height="svgProps?.height"
    >
      <path
        fill-rule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </icon-wrapper>
</template>

<script setup lang="ts">
import IconWrapper from '@/components/common/IconWrapper.vue';
import type { Icon } from '@/types/Icon';

defineProps<{
  svgProps?: Icon;
}>();
</script>
