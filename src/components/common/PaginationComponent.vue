<template>
  <div class="pagination-component space-y-2 pb-8 pt-6 md:space-y-5">
    <nav class="">
      <ul class="flex justify-between">
        <li class="page-item" :class="{ disabled: currentPage <= 1 }">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="changePage(currentPage - 1)">
            <span aria-hidden="true">Previous</span>
          </a>
        </li>
        <li v-for="page in pages" :key="page" :class="{ active: currentPage === page }" class="page-item">
          <a class="page-link" href="#" @click.prevent="selectPage(page)">{{ currentPage }} of {{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage >= pageCount }">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="changePage(currentPage + 1)">
            <span aria-hidden="true">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  totalItems: number;
  currentPage: number;
  pageSize: number;
}>();

const emit = defineEmits(['update:currentPage']);

const pageCount = computed(() => Math.ceil(props.totalItems / props.pageSize));

const pages = computed(() => {
  let range = [];
  for (let i = 1; i <= pageCount.value; i++) {
    range.push(i);
  }
  return range;
});

const selectPage = (page: number) => {
  if (page !== props.currentPage) {
    emit('update:currentPage', page);
  }
};

const changePage = (page: number) => {
  const pageNumber = Math.max(1, Math.min(page, pageCount.value));
  selectPage(pageNumber);
};
</script>
