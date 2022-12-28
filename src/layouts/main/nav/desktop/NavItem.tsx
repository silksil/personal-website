import { forwardRef } from 'react';
import NextLink from 'next/link';
import { Link } from '@mui/material';
import { NavItemDesktopProps } from '../types';
import { ListItem } from './styles';
import Iconify from 'src/components/iconify/Iconify';

export const NavItem = forwardRef<HTMLDivElement, NavItemDesktopProps>(
  ({ item, open, isOffset, active, subItem, isExternalLink, ...other }, ref) => {
    const { title, path, children } = item;

    const renderContent = (
      <ListItem
        ref={ref}
        disableRipple
        isOffset={isOffset}
        subItem={subItem}
        active={active}
        open={open}
        {...other}
      >
        {title}

        {!!children && (
          <Iconify
            width={16}
            icon={open ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            sx={{ ml: 1 }}
          />
        )}
      </ListItem>
    );

    // ExternalLink
    if (isExternalLink) {
      return (
        <Link href={path} target="_blank" rel="noopener" underline="none">
          {renderContent}
        </Link>
      );
    }

    // Has child
    if (children) {
      return renderContent;
    }

    // Default
    return (
      <NextLink href={path} passHref>
        {renderContent}
      </NextLink>
    );
  }
);
