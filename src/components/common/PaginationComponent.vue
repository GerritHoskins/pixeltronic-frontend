<template>
  <nav aria-label="blog page navigation" class="pagination-component space-y-2 pb-8 pt-6 md:space-y-5">
    <ul class="pagination flex justify-between">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <button v-if="!hasPreviousPage" class="cursor-auto disabled:opacity-50" disabled>Previous</button>
        <router-link v-if="hasPreviousPage" :to="previousPageUrl" aria-label="Previous" rel="prev" class="page-link">
          Previous
        </router-link>
      </li>
      <li class="page-item">
        <span> {{ currentPage }} of {{ totalPages }} </span>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <button v-if="!hasNextPage" class="cursor-auto disabled:opacity-50" disabled>Next</button>
        <router-link v-if="hasNextPage" :to="nextPageUrl" aria-label="Next" rel="next" class="page-link">
          Next
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import usePagination from '@/composables/usePagination';
import { computed } from 'vue';

const {
  currentPage: current,
  totalPages,
  hasPreviousPage,
  hasNextPage,
  previousPageUrl,
  nextPageUrl,
} = usePagination();
const currentPage = computed(() => current.value);
</script>
