import { defineStore } from 'pinia';
import axiosInstance from '../api';

export type ProjectGetRequestParams = {
  id: string;
};

export type ProjectAddRequestParams = {
  name: string;
  desc: string;
  img: string | null;
};

export const useProjectStore = defineStore({
  id: 'project',
  state: () => ({
    id: null,
    name: null,
    desc: null,
    img: null,
  }),
  actions: {
    async all(data: ProjectGetRequestParams) {
      const response = await axiosInstance.get('project/all', {
        data,
      });
      this.id = response.data.id;
      this.name = response.data.name;
      this.desc = response.data.desc;
      this.img = response.data.img;
    },
    async get(data: ProjectGetRequestParams) {
      const response = await axiosInstance.get('project/get', { data });
      this.id = response.data.id;
      this.name = response.data.name;
      this.desc = response.data.desc;
      this.img = response.data.img;
    },
    async add(data: ProjectAddRequestParams) {
      const response = await axiosInstance.post('project/add', data);
      this.name = response.data.name;
    },
  },
});
