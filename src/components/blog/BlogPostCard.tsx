import { Box, Card, Typography, CardContent, Stack } from '@mui/material';
import Image from '../image/Image';
import { IData } from 'src/@types/blog';
import TextMaxLine from '../text-max-line/TextMaxLine';
import { fShortenNumber } from 'src/utils/formatNumber';
import { fDate } from 'src/utils/date';
import Iconify from '../iconify/Iconify';

export default function BlogPostCard({ post }: { post: IData }) {
  const { coverImage, ...rest } = post;

  return (
    <Card sx={{ cursor: 'pointer' }}>
      <Box sx={{ position: 'relative' }}>
        <Image alt="cover" ratio="16/9" src={`/static/article-cover-images/${coverImage}`} />
      </Box>

      <PostContent {...rest} />
    </Card>
  );
}

type PostContentProps = {
  title: string;
  description: string;
  createdAt: Date | string | number;
  view?: number;
  comment?: number;
  share?: number;
  index?: number;
};

export function PostContent({
  title,
  view,
  comment,
  share,
  createdAt,
  description,
}: PostContentProps) {
  // Currently this is not being used
  const POST_INFO = [
    { number: comment, icon: 'eva:message-circle-fill' },
    { number: view, icon: 'eva:eye-fill' },
    { number: share, icon: 'eva:share-fill' },
  ];

  return (
    <CardContent
      sx={{
        pt: 4.5,
        width: 1,
      }}
    >
      <Typography
        gutterBottom
        variant="caption"
        component="div"
        sx={{
          color: 'text.secondary',
        }}
      >
        {fDate(createdAt)}
      </Typography>

      <TextMaxLine variant="h4" line={3} persistent>
        {title}
      </TextMaxLine>
      <TextMaxLine variant="body2" line={3} persistent sx={{ mt: 1 }}>
        {description}
      </TextMaxLine>

      <Stack
        flexWrap="wrap"
        direction="row"
        justifyContent="flex-end"
        sx={{
          mt: 3,
          color: 'text.disabled',
        }}
      >
        {POST_INFO.map((info, index) => {
          if (!info.number) return;
          return (
            <Stack
              key={index}
              direction="row"
              alignItems="center"
              sx={{ typography: 'caption', ml: index === 0 ? 0 : 1.5 }}
            >
              <Iconify icon={info.icon} width={16} sx={{ mr: 0.5 }} />
              {fShortenNumber(info.number)}
            </Stack>
          );
        })}
      </Stack>
    </CardContent>
  );
}
