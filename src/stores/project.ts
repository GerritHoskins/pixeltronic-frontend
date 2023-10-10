import { defineStore } from 'pinia';
import { api } from 'boot/axios';

interface State {
  projects: Project[];
}

export type Project = {
  id: string;
  name: string;
  desc: string;
  file?: File[];
};

export type ProjectGetRequestParams = {
  id: string;
};

export type ProjectAddRequestParams = {
  name: string;
  desc: string;
  file?: File[];
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
      const response = await api.get('project/all', {});
      this.projects = response.data.projects;
    },
    async get(data: ProjectGetRequestParams) {
      const response = await api.get('project/get', { data });
      this.projects.push(response.data);
    },
    add: async (data: ProjectAddRequestParams) =>
      await api.post('project/add', data),
  },

  getters: {
    projectList: (state) => state.projects,
  },
});
