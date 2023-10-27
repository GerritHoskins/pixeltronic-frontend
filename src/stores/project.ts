import { defineStore } from 'pinia';
import { axiosInstance } from '@/api/axiosInstance';
import type { AddProjectRequestParams, GetProjectsRequestParams, Project } from '@/types/Project';

const API_BASE = '/strapi/api/project';

const getApiFilePath = (filename: string) => `${import.meta.env.VITE_API_BASE_URL}/assets/uploads/${filename}`;

export const initialProjectState = () => ({
  projects: [] as unknown as Project[],
});

export const useProjectStore = defineStore({
  id: 'project',

  state: initialProjectState,

  actions: {
    async all(): Promise<void> {
      try {
        const { data } = await axiosInstance.get(`${API_BASE}/all`);
        this.projects = data.projects.map((project: Project) => ({
          ...project,
          file: getApiFilePath(project.file),
        }));
      } catch (error) {
        console.error('Error fetching all projects:', error);
        // TODO: user-friendly error handling here.
      }
    },

    async get(params: GetProjectsRequestParams): Promise<void> {
      try {
        const { data } = await axiosInstance.get(`${API_BASE}/get`, { params });
        this.projects.push(data);
      } catch (error) {
        console.error('Error fetching project:', error);
        // TODO: user-friendly error handling here.
      }
    },

    async add(data: AddProjectRequestParams): Promise<void> {
      const formData = new FormData();
      formData.append('file', data.file as File);
      formData.append('fileName', data.fileName);
      formData.append('name', data.name);
      formData.append('desc', data.desc);

      try {
        await axiosInstance.post(`${API_BASE}/add`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        await this.all();
      } catch (error) {
        console.error('Error adding project:', error);
        // TODO: user-friendly error handling here.
      }
    },
  },

  getters: {
    projectList: state => state.projects,
  },
});
