import { AboutHero } from 'src/sections/about/AboutHero';
import { Page } from 'src/components/Page';
import { AboutTabs } from 'src/sections/about/AboutTabs';
import { Container } from '@mui/material';
import MainLayout from 'src/layouts/main/MainLayout';

export default function Projects() {
  return (
    <MainLayout>
      <Page title="Sil Kreulen" id="move_top">
        <Container
          maxWidth="md"
          sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
        >
          <AboutHero />
          <AboutTabs />
        </Container>
      </Page>
    </MainLayout>
  );
}
