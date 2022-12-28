import React from 'react';

export interface IPost {
  data: IData;
  content: IContent;
}

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
