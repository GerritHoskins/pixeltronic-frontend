import { useRoute } from 'vue-router';
import type { RouteLocationRaw } from 'vue-router';
import { computed, watchEffect } from 'vue';
import useBlogStore from '@/stores/blog';

export default function usePagination() {
  const blogStore = useBlogStore();
  const route = useRoute();

  const totalPages = computed(() => {
    const { total, limit } = blogStore.blogPagination;
    return Math.ceil(total / limit);
  });

  const currentPage = computed(() => {
    const page = Number(route.params.page);
    return page >= 1 ? page : 1;
  });

  const updatePage = async (page: number) => {
    const { limit } = blogStore.blogPagination;
    const start = (page - 1) * limit;
    await blogStore.fetchBlogEntries({ start, limit });
  };

  watchEffect(async () => {
    const page = currentPage.value;
    await updatePage(page);
  });

  const hasPreviousPage = computed(() => currentPage.value > 1);
  const hasNextPage = computed(() => currentPage.value < totalPages.value);

  const previousPageUrl = computed(() => {
    return hasPreviousPage.value
      ? { name: 'blog-page', params: { page: currentPage.value - 1 } }
      : ({} as unknown as RouteLocationRaw);
  });

  const nextPageUrl = computed(() => {
    return hasNextPage.value
      ? { name: 'blog-page', params: { page: currentPage.value + 1 } }
      : ({} as unknown as RouteLocationRaw);
  });

  return {
    totalPages,
    currentPage,
    updatePage,
    previousPageUrl,
    nextPageUrl,
    hasPreviousPage,
    hasNextPage,
  };
}
