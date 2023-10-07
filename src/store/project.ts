import { defineStore } from 'pinia';
import axiosInstance from '../api';

interface State {
  projects: Project[];
}

export type Project = {
  id: string;
  name: string;
  desc: string;
  img?: File[];
};

export type ProjectGetRequestParams = {
  id: string;
};

export type ProjectAddRequestParams = {
  name: string;
  desc: string;
  img?: File[];
};

export const useProjectStore = defineStore({
  id: 'project',

  state: (): State => {
    return {
      projects: [],
    };
  },

  actions: {
    async all() {
      const response = await axiosInstance.get('project/all', {});
      this.projects = response.data.projects;
    },
    async get(data: ProjectGetRequestParams) {
      const response = await axiosInstance.get('project/get', { data });
      this.projects.push(response.data);
    },
    add: async (data: ProjectAddRequestParams) => await axiosInstance.post('project/add', data),
  },

  getters: {
    projectList: (state) => state.projects,
  },
});
