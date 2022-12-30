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
  ({ title, createdAt, readingTime, coverImage, source, headings, subtitle }, ref) => {
    const maxWidth = '640px';

    const header = (
      <header>
        <Container maxWidth="md">
          <Typography component="h1" variant="h2" sx={{ mb: 1 }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography component="h2" variant="subtitle1" sx={{ mb: 3 }}>
              {subtitle}
            </Typography>
          )}
          <Typography variant="body2" color="text.disabled" component="time">
            {`${fDate(createdAt)} — ${readingTime} min read`}
          </Typography>
          <MHidden width="mdDown">
            <Image
              src={`/static/article-cover-images/${coverImage}`}
              alt={`Photo of article: ${title}`}
              ratio="16/9"
              sx={{ mt: 3, mb: 6, borderRadius: 2 }}
            />
          </MHidden>
        </Container>
        <MHidden width="mdUp">
          <Image
            src={`/static/article-cover-images/${coverImage}`}
            alt={`Photo of article: ${title}`}
            ratio="16/9"
            sx={{ mt: 3, mb: 6 }}
          />
        </MHidden>
      </header>
    );

    return (
      <article>
        {header}
        <Grid container sx={{ overflow: { xs: 'hidden', md: 'visible' } }}>
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
          <Grid item xs={12} lg={8} component="section">
            <Box sx={{ maxWidth, margin: '0 auto', boxSizing: 'border-box', px: 2 }} ref={ref}>
              <Markdown source={source} />
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
