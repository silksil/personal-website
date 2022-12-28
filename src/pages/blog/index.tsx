import React from 'react';
import { getAllPosts } from 'src/utils/blog';
import NextLink from 'next/link';
import { IPost } from 'src/@types/blog';
import { GetStaticProps } from 'next';
import { Container, Grid, Typography } from '@mui/material';
import BlogPostCard from 'src/components/blog/BlogPostCard';
import MainLayout from 'src/layouts/main/MainLayout';
import { PATHS } from 'src/routes/paths';
import { NextSeo } from 'next-seo';

export default function BlogPage({ posts }: { posts: IPost[] }) {
  return (
    <MainLayout>
      <NextSeo title="Blog posts | Sil" description="Blog post written by Sil Kreulen" />
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" sx={{ textAlign: 'center', mb: 3 }}>
          Blog
        </Typography>
        <Grid container spacing={3}>
          {posts.map(({ data }) => {
            return (
              <NextLink href={`/${PATHS.blog}/${data.slug}`} passHref key={data.title}>
                <Grid key={data.title} item xs={12} sm={6} md={6}>
                  <BlogPostCard post={data} />
                </Grid>
              </NextLink>
            );
          })}
        </Grid>
      </Container>
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getAllPosts();

  return {
    props: {
      posts: articles.reverse(),
    },
  };
};
