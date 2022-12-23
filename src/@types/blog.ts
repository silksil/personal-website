import React from 'react';

export interface IPost {
  data: IData;
  content: IContent;
}

export type IContent = string;

export interface IData {
  slug: string;
  title: string;
  date: Date | string;
  coverImage: string;
  excerpt: string;
  readingTime: number;
}
