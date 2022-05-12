import { LandingHero } from "src/containers/LandingHero";
import { Page } from "src/components/Page";
import { DashboardLayout } from "src/layouts/dashboard";
import { Typography } from "@mui/material";

export default function Projects() {
  return (
    <DashboardLayout>
      <Page title="Sil Kreulen" id="move_top">
        <Typography>About</Typography>
      </Page>
    </DashboardLayout>
  );
}
