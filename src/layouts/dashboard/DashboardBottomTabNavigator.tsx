import { alpha, BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import { navbarConfig } from "./navbarConfig";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "@mui/system";

type NavItemProps = {
  title: string;
  path: string;
  icon?: JSX.Element;
};

const NavItem = ({ path, title, icon }: NavItemProps) => {
  const theme = useTheme();
  const { pathname } = useRouter();
  const isActiveRoot = pathname === path;

  const activeRootStyle = {
    color: "primary.main",
    fontWeight: "fontWeightMedium",
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    "&:before": { display: "block" }
  };

  return (
    // <NextLink href={path}>
    <BottomNavigationAction
      sx={{
        width: "100%",
        maxWidth: "auto",
        ...(isActiveRoot && activeRootStyle)
      }}
      label="TEST"
      icon={icon}
    />
    // </NextLink>
  );
};

export function DashboardBottomTabNavigator() {
  return (
    <BottomNavigation showLabels sx={{ position: "fixed", bottom: 0, width: "100%" }}>
      {navbarConfig.map((item: NavItemProps) => (
        <NavItem key={item.title} {...item} />
      ))}
    </BottomNavigation>
  );
}
