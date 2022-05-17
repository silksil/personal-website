import { AboutHero } from "src/containers/about/AboutHero";
import { Page } from "src/components/Page";
import { DashboardLayout } from "src/layouts/dashboard";
import { AboutTabs } from "src/containers/about/AboutTabs";
import { Container } from "@mui/material";

export default function Projects() {
  return (
    <DashboardLayout>
      <Page title="Sil Kreulen" id="move_top">
        <Container maxWidth="md" sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          <AboutHero />
          <AboutTabs />
        </Container>
      </Page>
    </DashboardLayout>
  );
}
