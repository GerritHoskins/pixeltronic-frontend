import { ref } from 'vue';
import axiosInstance from '@/api/axiosInstance';

export interface ApiResponse {
  data: Array<ArticleResponse> | Array<TagResponse>;
  meta: MetaResponse;
}

export type ArticleResponse = {
  attributes: {
    aid: number;
    title: string;
    publishedAt: string;
    description: string;
    tags: { data: Array<{ attributes: { name: string } }> };
    image: { data: { attributes: { url: string } } };
  };
};

export type TagResponse = {
  attributes: {
    name: string;
    articles: { data: Array<{ attributes: { name: string } }> };
  };
};

export type MetaResponse = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

const useApi = () => {
  const data = ref<ApiResponse>();
  const error = ref(null as unknown);
  const loading = ref(false);

  const fetchProjects = async () => await fetch('projects');
  const fetchBlogPosts = async () => await fetch('articles');
  const fetchTags = async () => await fetch('tags');

  const fetch = async (endpoint: string) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await axiosInstance.get(`/strapi/api/${endpoint}?populate=*`);
      data.value = response.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  const resetError = () => {
    error.value = null;
  };

  return {
    data,
    error,
    resetError,
    fetchProjects,
    fetchBlogPosts,
    fetchTags,
  };
};

export default useApi;
