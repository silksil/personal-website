import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { IData, IPost } from 'src/@types/blog';
import { getAllPosts, getArticleSlugs, getPost } from 'src/utils/blog';
import { ParsedUrlQuery } from 'querystring';
import { Box, Container, Typography, useTheme, Divider, Grid } from '@mui/material';
import Image from 'src/components/image/Image';
import Markdown from 'src/components/markdown/Markdown';
import { NextSeo } from 'next-seo';
import { BASE_URL } from 'src/config';
import MainLayout from 'src/layouts/main/MainLayout';
import { fDate } from 'src/utils/date';
import { useScroll, m, useSpring } from 'framer-motion';
import { useRef } from 'react';
import BlogPostCard from 'src/components/blog/BlogPostCard';

type Props = {
  source: MDXRemoteSerializeResult;
  data: IData;
  articles: IPost[];
};

const PostPage: React.FC<Props> = ({ source, data, articles }: Props) => {
  const theme = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const scaleX = useSpring(scrollYProgress);
  const progress = (
    <m.div
      style={{
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        zIndex: 1999,
        position: 'fixed',
        transformOrigin: '0%',
        backgroundColor: theme.palette.primary.main,
        scaleX,
      }}
    />
  );

  const slicedArticles = articles.slice(0, 3);

  const { title, description, createdAt, tags, coverImage, readingTime, slug } = data;

  return (
    <MainLayout>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: `${BASE_URL}/blog/${slug}`,
          title: title,
          description: description,
          type: 'article',
          article: {
            publishedTime: String(createdAt),
            authors: [`${BASE_URL}/about}`],
            tags: tags,
          },
          images: [
            {
              url: coverImage,
              alt: `Image of article: ${title}`,
            },
          ],
        }}
      />

      <article>
        {progress}
        <header>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" sx={{ mb: 1 }}>
              {title}
            </Typography>
            <Typography variant="body2" component="time">
              {`${fDate(createdAt)} — ${readingTime} min read`}
            </Typography>
            <Image
              src={coverImage}
              alt={`Photo of article: ${title}`}
              ratio="16/9"
              sx={{ my: 6, borderRadius: 2 }}
            />
          </Container>
        </header>

        <Box sx={{ maxWidth: '640px', margin: '0 auto', px: 2 }} ref={ref}>
          <section>
            <Markdown source={source} />
          </section>
          <Box component="footer" mt={4}>
            <Typography variant="caption" color="text.secondary">
              Last updated: {fDate(createdAt)}
            </Typography>
          </Box>
        </Box>
      </article>
      <Divider sx={{ my: 8 }} />
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mb: 2 }}>
          Latest posts
        </Typography>
        <Grid container spacing={3}>
          {slicedArticles.map((article) => (
            <Grid item key={article.data.slug} xs={12} md={6} lg={4}>
              <BlogPostCard post={article.data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default PostPage;

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;

  const { source, data } = await getPost({ slug });
  const articles = await getAllPosts();

  return {
    props: {
      source,
      data,
      articles,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getArticleSlugs();

  const paths = slugs.map((slug) => ({
    params: {
      slug: slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
