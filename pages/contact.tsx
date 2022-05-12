import { Page } from "src/components/Page";
import { DashboardLayout } from "src/layouts/dashboard";
import { PageTitle } from "src/components/PageTitle";

export default function Contact() {
  return (
    <DashboardLayout>
      <Page title="React Ts Boilerplate" id="move_top">
        <PageTitle title="Contacts" />
      </Page>
    </DashboardLayout>
  );
}
