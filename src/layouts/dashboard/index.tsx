import { ReactNode, useState } from 'react';
import { styled } from '@mui/material/styles';
import DashboardSidebar from './DashboardSidebar';
// import { MHidden } from "src/components/MHidden";
// import { DashboardBottomTabNavigator } from "./DashboardBottomTabNavigator";
// import { NoSsr } from "@mui/material";
const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')(() => ({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
}));

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 32,
  paddingBottom: theme.spacing(10),
  backgroundSize: '100% 100vh',

  '&:before': {
    width: '100%',
    height: '100%',
    position: 'absolute',
    content: 'close-quote',
    top: '0px',
    right: '0px',
    backgroundRepeat: 'no-repeat',
    opacity: 0.64,
    backgroundImage: 'url(/static/background.jpeg)',
    backgroundSize: '100% 100%',
    zIndex: -1,
  },
  [theme.breakpoints.up('lg')]: {
    backgroundSize: '100% 100%',
    paddingTop: APP_BAR_DESKTOP + 32,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },

  [theme.breakpoints.up('xl')]: {},
}));

type DashboardLayoutProps = {
  children?: ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />

      {/* <NoSsr>
        <MHidden width="lgUp">
          <DashboardBottomTabNavigator />
        </MHidden>
      </NoSsr> */}
      <MainStyle className="main-style">{children}</MainStyle>
    </RootStyle>
  );
}
