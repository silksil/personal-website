import { ReactNode } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { alpha, useTheme, styled } from "@mui/material/styles";
import { List, BoxProps, ListItemText, ListItemIcon, ListItemButton, ListItemButtonProps } from "@mui/material";

interface ListItemStyleProps extends ListItemButtonProps {
  component?: ReactNode;
  to?: string;
}

const ListItemStyle = styled(ListItemButton)<ListItemStyleProps>(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: "bold",
  height: 48,
  position: "relative",
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary,
  "&:hover": { backgroundColor: theme.palette.background.paper, color: theme.palette.text.primary }
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

type NavItemProps = {
  title: string;
  path: string;
  icon?: JSX.Element;
};

function NavItem({ item }: { item: NavItemProps }) {
  const theme = useTheme();
  const { pathname } = useRouter();
  const { title, path, icon } = item;
  const isActiveRoot = pathname === path;

  const activeRootStyle = {
    color: "primary.main",
    fontWeight: "fontWeightMedium",
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    "&:before": { display: "block" }
  };

  return (
    <NextLink href={path}>
      <ListItemStyle
        sx={{
          ...(isActiveRoot && activeRootStyle)
        }}
      >
        <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
        <ListItemText disableTypography primary={title} />
      </ListItemStyle>
    </NextLink>
  );
}

interface NavSectionProps extends BoxProps {
  isShow?: boolean | undefined;
  navConfig: NavItemProps[];
}

export function NavSection({ navConfig }: NavSectionProps) {
  return (
    <List disablePadding>
      {navConfig.map((item: NavItemProps) => (
        <NavItem key={item.title} item={item} />
      ))}
    </List>
  );
}
