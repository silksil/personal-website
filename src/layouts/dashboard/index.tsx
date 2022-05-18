import { ReactNode, useState } from "react";
import { styled } from "@mui/material/styles";
import DashboardSidebar from "./DashboardSidebar";
import { MHidden } from "src/components/MHidden";
import { DashboardBottomTabNavigator } from "./DashboardBottomTabNavigator";
import { NoSsr } from "@mui/material";
const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled("div")(() => ({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden"
}));

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  backgroundImage: "url(/static/background.jpeg)",
  paddingTop: APP_BAR_MOBILE + 32,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 32,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

type DashboardLayoutProps = {
  children?: ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      <NoSsr>
        <MHidden width="lgDown">
          <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
        </MHidden>
      </NoSsr>
      {/* <NoSsr>
        <MHidden width="lgUp">
          <DashboardBottomTabNavigator />
        </MHidden>
      </NoSsr> */}
      <MainStyle className="main-style">{children}</MainStyle>
    </RootStyle>
  );
}
