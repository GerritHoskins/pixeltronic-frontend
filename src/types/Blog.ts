type BlogEntry = {
  publishedOn: string;
  title: string;
  tags: Tag[];
  description: string;
};

type Tag = {
  label: string;
};

export type { BlogEntry, Tag };
