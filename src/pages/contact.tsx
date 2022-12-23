import { Page } from "src/components/Page";
import { DashboardLayout } from "src/layouts/dashboard";
import { PageHeading } from "src/components/PageHeading";
import { Container, Typography } from "@mui/material";
import { SocialIcons } from "src/containers/SocialIcons";

export default function Contact() {
  return (
    <DashboardLayout>
      <Page title="Sil Kreulen Contact" id="move_top">
        <Container maxWidth="md" sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          <PageHeading title="Contact" />
          <Typography>Find and message my here:</Typography>
          <SocialIcons />
        </Container>
      </Page>
    </DashboardLayout>
  );
}
