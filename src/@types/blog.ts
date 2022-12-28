export interface IPost {
  data: IData;
  content: IContent;
  headings?: IHeadings;
}

export type IHeadings = { text: string; level: number }[];

export type IContent = string;

export interface IData {
  slug: string;
  title: string;
  createdAt: Date | string;
  lastUpdatedAt?: Date | string;
  coverImage: string;
  description: string;
  readingTime: number;
  tags?: string[];
}
