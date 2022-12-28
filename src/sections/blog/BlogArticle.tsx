import { Container, Typography, Box, Grid } from '@mui/material';
import Image from 'src/components/image/Image';
import Markdown from 'src/components/markdown/Markdown';
import { fDate } from 'src/utils/date';
import { IData, IHeadings } from 'src/@types/blog';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { forwardRef } from 'react';
import { BlogToc } from './BlogToc';
import { MHidden } from 'src/components/MHidden';

interface Props extends IData {
  source: MDXRemoteSerializeResult;
  headings: IHeadings;
}

export const BlogArticle = forwardRef<any, Props>(
  ({ title, createdAt, readingTime, coverImage, source, headings }, ref) => {
    const maxWidth = '640px';
    return (
      <article>
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
        <Grid container>
          <MHidden width="lgUp">
            <Grid item xs={12}>
              <Box sx={{ maxWidth, margin: '0 auto', px: 2, mb: 6 }}>
                <BlogToc headings={headings} />
              </Box>
            </Grid>
          </MHidden>
          <MHidden width="lgDown">
            <Grid item xs={12} lg={2} />
          </MHidden>
          <Grid item xs={12} lg={8}>
            <Box sx={{ maxWidth, margin: '0 auto', px: 2 }} ref={ref}>
              <section>
                <Markdown source={source} />
              </section>
              <Box component="footer" mt={4}>
                <Typography variant="caption" color="text.secondary">
                  Last updated: {fDate(createdAt)}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <MHidden width="lgDown">
            <Grid item lg={2}>
              <Box sx={{ position: 'sticky', top: 140, mr: 2 }}>
                <BlogToc headings={headings} />
              </Box>
            </Grid>
          </MHidden>
        </Grid>
      </article>
    );
  }
);
