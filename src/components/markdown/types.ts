import { Theme } from '@mui/material/styles';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { IData } from 'src/@types/blog';

type Props = {
  source: MDXRemoteSerializeResult;
  data: IData;
};
