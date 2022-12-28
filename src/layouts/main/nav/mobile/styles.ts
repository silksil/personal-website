import { styled, alpha } from '@mui/material/styles';
import { ListItemButton } from '@mui/material';
import { NavItemMobileProps } from '../types';
import { NAV } from 'src/config';

type ListItemProps = Omit<NavItemMobileProps, 'item'>;

export const ListItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})<ListItemProps>(({ active, theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  height: NAV.H_DASHBOARD_ITEM,
  // Active
  ...(active && {
    color: theme.palette.primary.main,
    ...theme.typography.subtitle2,
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  }),
}));
