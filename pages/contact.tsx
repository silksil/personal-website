import { Page } from "src/components/Page";
import { DashboardLayout } from "src/layouts/dashboard";
import { PageTitle } from "src/components/PageTitle";
import { Container } from "@mui/material";
import { SocialIcons } from "src/containers/SocialIcons";

export default function Contact() {
  return (
    <DashboardLayout>
      <Page title="React Ts Boilerplate" id="move_top">
        <Container maxWidth="md" sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          <PageTitle title="Contact" />

          <SocialIcons />
        </Container>
      </Page>
    </DashboardLayout>
  );
}
