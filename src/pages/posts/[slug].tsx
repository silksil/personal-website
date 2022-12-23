import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { IData } from 'src/@types/blog';
import { getArticleSlugs, getPost } from 'src/utils/blog';
import { ParsedUrlQuery } from 'querystring';
import { DashboardLayout } from 'src/layouts/dashboard';
import { Box, Container, Divider, Link, List, ListItem, Typography } from '@mui/material';
import Image from 'src/components/image/Image';
import NextLink from 'next/link';

const components = {
  h1: ({ ...props }) => <Typography component="h1" variant="h2" mb={3} {...props} />,
  h2: ({ ...props }) => <Typography component="h2" variant="h3" mt={5} mb={1} {...props} />,
  h3: ({ ...props }) => <Typography component="h3" variant="h4" mt={3} mb={1} {...props} />,
  h4: ({ ...props }) => <Typography component="h4" variant="h5" mt={3} mb={1} {...props} />,
  h5: ({ ...props }) => <Typography component="h5" variant="h6" mt={2} mb={1} {...props} />,
  h6: ({ ...props }) => <Typography component="h6" variant="h6" mt={2} mb={1} {...props} />,
  hr: ({ ...props }) => <Divider sx={{ my: 3 }} {...props} />,
  ul: ({ ...props }) => <List {...props} sx={{ mb: 1 }} />,
  li: ({ ...props }) => <Typography variant="body1" component="li" {...props} sx={{ display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside', paddingLeft: 0 }} />,
  p: ({ ...props }) => <Typography variant="body1" gutterBottom={true} {...props} />,
  img: ({ ...props }) => <Image alt={props.alt} ratio="16/9" sx={{ borderRadius: 2, my: 5 }} {...props} />,
  a: ({ ...props }) =>
    props.href.includes('http') ? (
      <Link target="_blank" rel="noopener" {...props} />
    ) : (
      <NextLink href={props.href} passHref>
        <Link {...props}>{props.children}</Link>
      </NextLink>
    ),
};

type Props = {
  source: MDXRemoteSerializeResult;
  data: IData;
};

const PostPage: React.FC<Props> = ({ source, data }: Props) => {
  return (
    <DashboardLayout>
      <Box sx={{ maxWidth: '700px', margin: '0 auto' }}>
        <article>
          <header>
            <p>Author: </p>
            <time></time>
            <Image />
          </header>
          <section>
            <MDXRemote compiledSource={source.compiledSource} components={components} />
          </section>
          <footer>
            <time></time>
          </footer>
        </article>
      </Box>
    </DashboardLayout>
  );
};

export default PostPage;

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;

  const { source, data } = await getPost({ slug });

  return {
    props: {
      source,
      data,
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
