import { Container, Typography, Avatar } from '@mui/material';
import { PageHeading } from 'src/components/PageHeading';
import { SocialIcons } from '../SocialIcons';

export function AboutHero() {
  return (
    <Container maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 6, textAlign: 'center' }}>
      <Avatar src="/static/sil.png" sx={{ width: 100, height: 100 }} />
      <PageHeading title="Sil Kreulen" />
      <Typography>
        Sil is a{' '}
        <Typography component="span" fontWeight="bold">
          front-end{' '}
        </Typography>
        developer who is passionate about{' '}
        <Typography component="span" fontWeight="bold">
          beautiful
        </Typography>{' '}
        <Typography component="span" fontWeight="bold">
          UX
        </Typography>
        .
      </Typography>

      <Typography variant="body2"></Typography>

      <SocialIcons sx={{ mt: 1 }} />
    </Container>
  );
}
