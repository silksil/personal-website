import { useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import { Box, Drawer } from "@mui/material";
import { Logo } from "../../components/Logo";
import { NavSection } from "../../components/NavSection";
import { navbarConfig } from "./navbarConfig";
import { MHidden } from "src/components/MHidden";

const DRAWER_WIDTH = 200;

const RootStyle = styled("div")(({ theme }) => ({
  display: "none",

  [theme.breakpoints.up("lg")]: {
    display: "block",
    flexShrink: 0,
    transition: theme.transitions.create("width", {
      duration: theme.transitions.duration.complex
    })
  }
}));

type DashboardSidebarProps = {
  isOpenSidebar: boolean;
  onCloseSidebar: VoidFunction;
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }: DashboardSidebarProps) {
  const { pathname } = useRouter();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  return (
    <RootStyle
      sx={{
        width: {
          lg: DRAWER_WIDTH
        }
      }}
    >
      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              height: "100%",
              width: DRAWER_WIDTH,
              bgcolor: "background.neutral"
            }
          }}
        >
          <Box sx={{ ml: 2, mt: 2, mb: 5 }}>
            <NextLink href="/">
              <Logo />
            </NextLink>
          </Box>

          <NavSection navConfig={navbarConfig} />
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
