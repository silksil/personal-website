import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import NextLink from 'next/link';
import { Link, Typography, Divider } from '@mui/material';
import StyledMarkdown from './styles';
import Image from '../image/Image';

const components = {
  h1: ({ ...props }) => <Typography component="h1" variant="h2" mb={1} {...props} />,
  h2: ({ ...props }) => <Typography component="h2" variant="h3" mt={5} mb={1} {...props} />,
  h3: ({ ...props }) => <Typography component="h3" variant="h4" mt={3} mb={1} {...props} />,
  h4: ({ ...props }) => <Typography component="h4" variant="h5" mt={3} mb={1} {...props} />,
  h5: ({ ...props }) => <Typography component="h5" variant="h6" mt={2} mb={1} {...props} />,
  h6: ({ ...props }) => <Typography component="h6" variant="h6" mt={2} mb={1} {...props} />,
  hr: ({ ...props }) => <Divider sx={{ my: 3 }} {...props} />,
  p: ({ ...props }) => <Typography variant="body1" gutterBottom={true} {...props} />,
  img: ({ ...props }) => (
    <Image alt={props.alt} ratio="16/9" sx={{ borderRadius: 2, my: 5 }} {...props} />
  ),
  a: ({ ...props }) =>
    props.href.includes('http') ? (
      <Link target="_blank" rel="noopener" {...props} />
    ) : (
      <NextLink href={props.href} passHref>
        <Link {...props}>{props.children}</Link>
      </NextLink>
    ),
};

export type MarkdownProps = {
  source: MDXRemoteSerializeResult;
};

export default function Markdown(props: MarkdownProps) {
  return (
    <StyledMarkdown>
      <MDXRemote compiledSource={props.source.compiledSource} components={components} />
    </StyledMarkdown>
  );
}
