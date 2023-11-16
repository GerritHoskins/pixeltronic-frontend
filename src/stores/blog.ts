import { defineStore } from 'pinia';
import type { BlogEntry, Tag, BlogPagination } from '@/types/Blog';
import useApi from '@/composables/useApi';
import type { ArticleResponse, TagResponse } from '@/composables/useApi';
import { ref, watch } from 'vue';
import useSlugger from '@/composables/useSlugger';

const useBlogStore = defineStore('blog', {
  state: () => ({
    blogEntries: ref<BlogEntry[]>([]),
    blogPagination: ref<BlogPagination>({ start: 0, limit: 3, total: 0 }),
    tags: ref<Tag[]>([]),
  }),

  actions: {
    async initialize() {
      const [tagPromise, entryPromise] = [this.fetchTags(), this.fetchBlogEntries({ start: 1, limit: 3 })];
      await Promise.allSettled([tagPromise, entryPromise]);
    },

    async fetchBlogEntries(pagination?: { start: number; limit: number }) {
      const { data: blogPosts, fetchBlogPosts } = useApi();

      const { slugger } = useSlugger();
      watch(blogPosts, newVal => {
        const blogEntries = (newVal?.data as ArticleResponse[]).map(entry => ({
          id: entry.attributes.aid,
          slug: slugger(entry.attributes.title),
          publishedOn: entry.attributes.publishedAt,
          title: entry.attributes.title,
          tags: entry.attributes.tags.data.map(tag => ({
            label: tag.attributes.name,
            count: entry.attributes.tags.data.length,
          })),
          description: entry.attributes.description,
          image: entry.attributes.image?.data?.attributes?.url,
        }));

        const { total: ptotal, limit: plimit } = newVal?.meta.pagination ?? this.blogPagination;
        this.blogPagination.total = ptotal;
        this.blogPagination.limit = plimit;

        this.blogEntries = [];
        this.blogEntries.push(...blogEntries);
      });
      await fetchBlogPosts(pagination);
    },

    async fetchTags() {
      const { data: tags, fetchTags } = useApi();

      watch(tags, newVal => {
        this.tags = (newVal?.data as TagResponse[]).map(tag => ({
          label: tag.attributes.name,
          count: tag.attributes?.articles?.data?.length,
        }));
      });

      await fetchTags();
    },
  },

  getters: {
    getBlogEntryBySlug:
      state =>
      (slug: string): BlogEntry => {
        return state.blogEntries.find(entry => entry.slug === slug) ?? ({} as BlogEntry);
      },
  },
});

export default useBlogStore;
