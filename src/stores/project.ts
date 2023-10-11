import { defineStore } from 'pinia';
import { api } from 'boot/axios';

interface State {
  projects: Project[];
}

export type Project = {
  _id: string;
  name: string;
  desc: string;
  file: string;
  fileName?: string;
};

export type ProjectGetRequestParams = {
  id: string;
};

export type ProjectAddRequestParams = {
  name: string;
  desc: string;
  file: File | null;
  fileName: string;
};

export const useProjectStore = defineStore({
  id: 'project',

  state: (): State => ({
    projects: [],
  }),

  actions: {
    async all() {
      try {
        const response = await api.get('project/all');
        this.projects = response.data.projects.map((project: Project) => ({
          _id: project._id,
          name: project.name,
          desc: project.desc,
          file: `${import.meta.env.VITE_API_URL}/assets/uploads/${
            project.file
          }`,
        }));
      } catch (error) {
        console.error('Error fetching all projects:', error);
      }
    },

    async get(params: ProjectGetRequestParams) {
      try {
        const response = await api.get('project/get', { params });
        this.projects.push(response.data);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    },

    async add(data: ProjectAddRequestParams) {
      const formData = new FormData();
      formData.append('file', data.file as File);
      formData.append('fileName', data.fileName);
      formData.append('name', data.name);
      formData.append('desc', data.desc);

      try {
        await api.post('project/add', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        this.all(); // Refresh the project list after adding a new project.
      } catch (error) {
        console.error('Error adding project:', error);
      }
    },
  },

  getters: {
    projectList: (state) => state.projects,
  },
});
