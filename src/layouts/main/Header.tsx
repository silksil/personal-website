import { useTheme } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Container, BoxProps } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
import { bgBlur } from '../../utils/cssStyles';
import NavMobile from './nav/mobile';
import navConfig from './nav/config';
import NavDesktop from './nav/desktop';
import { Logo } from 'src/components/Logo';
import useOffSetTop from 'src/hooks/useOffsetTop';
import { HEADER } from 'src/config';
import NextLink from 'next/link';

export default function Header({ headerIsFixed }: { headerIsFixed: boolean }) {
  const theme = useTheme();
  const isDesktop = useResponsive('up', 'md');
  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

  return (
    <AppBar
      color="transparent"
      sx={{ boxShadow: 0, position: headerIsFixed ? 'fixed' : 'relative' }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerIsFixed &&
            isOffset && {
              ...bgBlur({ color: theme.palette.background.default }),
              height: {
                md: HEADER.H_MAIN_DESKTOP - 16,
              },
            }),
        }}
      >
        <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <NextLink href="/">
            <Logo />
          </NextLink>

          <Box sx={{ flexGrow: 1 }} />

          {isDesktop && <NavDesktop isOffset={isOffset} data={navConfig} />}

          {!isDesktop && <NavMobile isOffset={isOffset} data={navConfig} />}
        </Container>
      </Toolbar>

      {isOffset && <Shadow />}
    </AppBar>
  );
}

function Shadow({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        m: 'auto',
        borderRadius: '50%',
        position: 'absolute',
        width: `calc(100% - 48px)`,
        boxShadow: (theme) => theme.customShadows.z8,
        ...sx,
      }}
      {...other}
    />
  );
}
