import { LandingHero } from "src/containers/LandingHero";
import { Page } from "src/components/Page";
import { DashboardLayout } from "src/layouts/dashboard";

export default function Home() {
  return (
    <DashboardLayout>
      <Page title="Sil Kreulen" id="move_top">
        <LandingHero />
      </Page>
    </DashboardLayout>
  );
}
