<template>
  <div class="brand-logo">
    <div class="flex items-center">
      <div class="mr-1">
        <brand-icon :svg-props="{ width: 32, height: 32 }" />
      </div>
      <div class="hidden h-[27px] flex flex-col justify-center text-3xl font-semibold sm:block">ixeltronic.dev</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BrandIcon from '@/components/common/icons/BrandIcon.vue';
</script>
