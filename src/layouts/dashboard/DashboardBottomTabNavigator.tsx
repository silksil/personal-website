import { alpha, BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react';
import { navbarConfig } from './navbarConfig';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '@mui/system';

type NavItemProps = {
  title: string;
  path: string;
  icon?: JSX.Element;
};

const NavItem = ({ path, title, icon }: NavItemProps) => {
  const { pathname } = useRouter();
  const isActiveRoot = pathname === path;

  const activeRootStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium',
    '&:before': { display: 'block' },
  };

  return (
    <NextLink href={path}>
      <BottomNavigationAction
        sx={{
          zIndex: 1000,
          fontFamily: 'sans serif',
          width: '100%',
          maxWidth: '100%',
          ...(isActiveRoot && activeRootStyle),
        }}
        showLabel
        label={title}
        icon={icon}
      />
    </NextLink>
  );
};

export function DashboardBottomTabNavigator() {
  const theme = useTheme();

  return (
    <BottomNavigation showLabels sx={{ position: 'fixed', bottom: 0, width: '100%' }}>
      {navbarConfig.map((item: NavItemProps) => (
        <NavItem key={item.title} {...item} />
      ))}
    </BottomNavigation>
  );
}
