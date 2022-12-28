import React from 'react';
import { Box, BoxProps, Link } from '@mui/material';
import NextLink from 'next/link';

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = React.forwardRef<any, LogoProps>(({ disabledLink = false, sx, ...rest }, ref) => {
  const logo = (
    <Box ref={ref} sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }} {...rest}>
      <img src="/static/logo.png" alt="Logo Sil Kreulen" />
    </Box>
  );

  if (disabledLink) return logo;

  return (
    <NextLink href="/" passHref>
      <Link sx={{ display: 'contents' }}>{logo}</Link>
    </NextLink>
  );
});

export { Logo };
