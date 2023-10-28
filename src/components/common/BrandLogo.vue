<template>
  <div class="brand-logo pl-4">
    <div class="flex items-center justify-center">
      <div class="mr-1">
        <brand-icon :svg-props="{ width: 32, height: 32 }" />
      </div>
      <div
        class="hidden h-[45px] leading-[51px] flex flex-col text-primary-500 justify-center text-3xl font-semibold sm:block"
      >
        ixeltronic.dev
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BrandIcon from '@/components/common/icons/BrandIcon.vue';
</script>
