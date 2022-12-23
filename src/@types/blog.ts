import React from 'react';

export interface IPost {
  data: IData;
  content?: React.ReactNode;
}

export interface IData {
  slug: string;
  title: string;
  date: Date | string;
  coverImage: string;
  excerpt: string;
  readingTime: number;
}
