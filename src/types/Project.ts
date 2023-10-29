type Project = {
  _id: string;
  name: string;
  desc: string;
  file: string;
  fileName?: string;
};

type GetProjectsRequestParams = {
  id: string;
};

type AddProjectRequestParams = {
  name: string;
  desc: string;
  file: File | null;
  fileName: string;
};

type ProjectPost = {
  link: string;
  image: string;
  title: string;
  description: string;
  status?: string;
  postedAt?: string;
};

export type { Project, GetProjectsRequestParams, AddProjectRequestParams, ProjectPost };
