import { ref } from 'vue';
import axiosInstance from '@/api/axiosInstance';

const useApi = () => {
  const data = ref(null);
  const error = ref(null);
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
