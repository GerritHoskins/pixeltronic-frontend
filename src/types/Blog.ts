type BlogEntry = {
  id: number;
  slug: string;
  publishedOn: string;
  title: string;
  tags: Tag[];
  description: string;
  image?: string;
};

type Tag = {
  label: string;
  count: number;
};

type BlogPagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type { BlogEntry, Tag, BlogPagination };
