import React from 'react';
import { getAllPosts } from 'src/utils/blog';
import Head from 'next/head';
import Link from 'next/link';
import { IPost } from 'src/@types/blog';
import { GetStaticProps } from 'next';

export default function BlogPage({ posts }: { posts: IPost[] }) {
  return (
    <React.Fragment>
      <Head>
        <title>My Blog</title>
      </Head>
      <div>
        {posts.map(({ data }) => {
          return (
            <Link href={`/posts/${data.slug}`} passHref>
              <article>
                <h1 className="title">{data.title}</h1>
                <p className="summary">{data.excerpt}</p>
                <p className="date"></p>
              </article>
            </Link>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getAllPosts();

  articles
    .map((article) => article.data)
    .sort((a, b) => {
      if (a.date > b.date) return 1;
      if (a.date < b.date) return -1;

      return 0;
    });

  return {
    props: {
      posts: articles.reverse(),
    },
  };
};
