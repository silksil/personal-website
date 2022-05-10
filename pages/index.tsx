import { LandingHero } from "src/containers/LandingHero";
import { Page } from "src/components/Page";
import { DashboardLayout } from "src/layouts/dashboard";

export default function AboutPage() {
  return (
    <DashboardLayout>
      <Page title="React Ts Boilerplate" id="move_top">
        <LandingHero />
      </Page>
    </DashboardLayout>
  );
}
