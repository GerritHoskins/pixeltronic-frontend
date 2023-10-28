<template>
  <icon-wrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="`${svgProps?.width}pt` || '32px'"
      :height="`${svgProps?.height}pt` || '32pt'"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#60cfe6" stroke="none">
        <path
          d="M0 2560 l0 -2560 2560 0 2560 0 0 2560 0 2560 -2560 0 -2560 0 0 -2560z m2719 1700 c545 -42 942 -310 1088 -735 81 -236 83 -537 6 -765 -110 -323 -371 -550 -753 -654 -163 -44 -222 -49 -667 -53 l-433 -5 0 -599 0 -599 -355 0 -355 0 0 1710 0 1710 668 0 c367 0 727 -5 801 -10z"
        />
        <path
          d="M1960 3161 l0 -531 373 0 c413 0 463 6 577 62 114 56 192 152 226 281 18 68 18 236 -1 315 -43 183 -170 318 -355 378 -48 15 -105 18 -437 22 l-383 3 0 -530z"
        />
      </g>
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
