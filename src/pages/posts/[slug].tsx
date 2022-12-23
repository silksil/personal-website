import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { IData } from 'src/@types/blog';
import { getArticleSlugs, getPost } from 'src/utils/blog';
import { ParsedUrlQuery } from 'querystring';
import { DashboardLayout } from 'src/layouts/dashboard';
import { Box } from '@mui/material';
import Image from 'src/components/image/Image';
import Markdown from 'src/components/markdown/Markdown';

type Props = {
  source: MDXRemoteSerializeResult;
  data: IData;
};

const PostPage: React.FC<Props> = ({ source, data }: Props) => {
  return (
    <DashboardLayout>
      <Box sx={{ maxWidth: '640px', margin: '0 auto' }}>
        <article>
          <header>
            <p>Author: </p>
            <time></time>
            <Image />
          </header>
          <section>
            <Markdown source={source} />
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
