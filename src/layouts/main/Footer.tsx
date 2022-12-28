import { Box, Stack, Container, Typography } from '@mui/material';
import { Logo } from 'src/components/Logo';
import { SocialIcons } from 'src/components/SocialIcons';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        pt: 20,
        pb: 5,
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Container>
        <Logo sx={{ mb: 1, mx: 'auto' }} />
        <Stack
          spacing={1}
          direction="row"
          justifyContent="center"
          sx={{
            mb: { xs: 5 },
          }}
        >
          <SocialIcons />
        </Stack>

        <Typography variant="caption" component="div" color="text.secondary">
          © All rights reserved by Sil kreulen
        </Typography>
      </Container>
    </Box>
  );
}
