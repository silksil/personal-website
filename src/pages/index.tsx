import { AboutHero } from 'src/sections/about/AboutHero';
import { Page } from 'src/components/Page';
import { Container, Grid, Typography } from '@mui/material';
import MainLayout from 'src/layouts/main/MainLayout';
import { getAllPosts } from 'src/utils/blog';
import { IPost } from 'src/@types/blog';
import BlogPostCard from 'src/components/blog/BlogPostCard';
import NextLink from 'next/link';
import { PATHS } from 'src/routes/paths';

export default function Projects({ articles }: { articles: IPost[] }) {
  const slicedArticles = articles.slice(0, 3);

  return (
    <MainLayout>
      <Page title="Sil Kreulen" id="move_top">
        <Container maxWidth="md">
          <AboutHero />
        </Container>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ mb: 2 }}>
            Latest posts
          </Typography>
          <Grid container spacing={3}>
            {slicedArticles.map((article, index) => (
              <NextLink href={`${PATHS.blog}/${article.data.slug}`} key={index}>
                <Grid item key={article.data.slug} xs={12} md={6} lg={4}>
                  <BlogPostCard post={article.data} />
                </Grid>
              </NextLink>
            ))}
          </Grid>
        </Container>
      </Page>
    </MainLayout>
  );
}

export const getStaticProps = async () => {
  const articles = await getAllPosts();

  return {
    props: {
      articles,
    },
  };
};
