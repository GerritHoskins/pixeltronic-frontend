import { ref } from 'vue';

import axiosInstance from '@/api/axiosInstance';

const fetchBlogPosts = () => {
  const blogPosts = ref(null);
  const error = ref(null);

  const fetch = async () => {
    try {
      const response = await axiosInstance.get('/strapi/api/articles?populate=*');
      blogPosts.value = response.data;
    } catch (err) {
      error.value = err;
    }
  };

  return {
    blogPosts,
    error,
    fetch,
  };
};

export default fetchBlogPosts;
