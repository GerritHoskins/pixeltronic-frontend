import { ref } from 'vue';
import axiosInstance from '@/api/axiosInstance';

const fetchTags = () => {
  const tags = ref(null);
  const error = ref(null);

  const fetch = async () => {
    try {
      const response = await axiosInstance.get('/strapi/api/tags?populate=*');
      tags.value = response.data;
    } catch (err) {
      error.value = err;
    }
  };

  return {
    tags,
    error,
    fetch,
  };
};

export default fetchTags;
