import { defineStore } from 'pinia';
import type { BlogEntry, Tag } from '@/types/Blog';
import useApi from '@/composables/useApi';
import type { ArticleResponse, TagResponse } from '@/composables/useApi';
import { watch } from 'vue';
import useSlugger from '@/composables/useSlugger';

const useBlogStore = defineStore('blog', {
  state: () => ({
    blogEntries: [] as BlogEntry[],
    tags: [] as Tag[],
  }),

  actions: {
    async initialize() {
      const { data: blogPosts, fetchBlogPosts } = useApi();
      const { data: tags, fetchTags } = useApi();

      const { slugger } = useSlugger();
      watch(blogPosts, newVal => {
        (newVal as ArticleResponse)?.data.forEach(entry => {
          this.blogEntries.push({
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
          });
        });
      });

      watch(tags, newVal => {
        (newVal as TagResponse)?.data.forEach(tag => {
          this.tags.push({
            label: tag.attributes.name,
            count: tag.attributes?.articles?.data?.length,
          });
        });
      });

      try {
        await Promise.all([fetchTags(), fetchBlogPosts()]);
      } catch (error) {
        console.error('Initialization failed: ', error);
      }
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
