import { Container, Typography, Avatar, useMediaQuery, useTheme } from '@mui/material';
import { PageHeading } from 'src/components/PageHeading';
import { SocialIcons } from '../../components/SocialIcons';

export function AboutHero() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: 4,
        textAlign: 'center',
      }}
    >
      <Avatar src="/static/sil.png" sx={{ width: 100, height: 100 }} />
      <PageHeading title="Sil Kreulen" />
      <Typography>
        Sil is a{' '}
        <Typography component="span" fontWeight="bold">
          front-end{' '}
        </Typography>
        developer who is passionate about beautiful{' '}
        <Typography component="span" fontWeight="bold">
          UX {isDesktop && <br />}
        </Typography>
        and{' '}
        <Typography component="span" fontWeight="bold">
          empowering{' '}
        </Typography>
        <Typography component="span">his </Typography>
        <Typography component="span" fontWeight="bold">
          team members.
        </Typography>
      </Typography>
      <SocialIcons sx={{ mt: 1 }} />
    </Container>
  );
}
