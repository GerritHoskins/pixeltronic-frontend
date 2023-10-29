type BlogEntry = {
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

export type { BlogEntry, Tag };
