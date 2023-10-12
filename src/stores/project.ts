import { defineStore } from 'pinia';
import { api } from 'boot/axios';

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

const API_BASE = '/api/project';

const getApiFilePath = (filename: string) =>
  `${import.meta.env.VITE_API_URL}/assets/uploads/${filename}`;

export const initialProjectState = () => ({
  projects: [],
});

export const useProjectStore = defineStore({
  id: 'project',

  state: initialProjectState,

  actions: {
    async all(): Promise<void> {
      try {
        const { data } = await api.get(`${API_BASE}/all`);
        this.projects = data.projects.map((project: Project) => ({
          ...project,
          file: getApiFilePath(project.file),
        }));
      } catch (error) {
        console.error('Error fetching all projects:', error);
        // TODO: user-friendly error handling here.
      }
    },

    async get(params: ProjectGetRequestParams): Promise<void> {
      try {
        const { data } = await api.get(`${API_BASE}/get`, { params });
        this.projects.push(data);
      } catch (error) {
        console.error('Error fetching project:', error);
        // TODO: user-friendly error handling here.
      }
    },

    async add(data: ProjectAddRequestParams): Promise<void> {
      const formData = new FormData();
      formData.append('file', data.file as File);
      formData.append('fileName', data.fileName);
      formData.append('name', data.name);
      formData.append('desc', data.desc);

      try {
        await api.post(`${API_BASE}/add`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        await this.all(); // Refresh the project list after adding a new project.
      } catch (error) {
        console.error('Error adding project:', error);
        // TODO: user-friendly error handling here.
      }
    },
  },

  getters: {
    projectList: (state) => state.projects,
  },
});
