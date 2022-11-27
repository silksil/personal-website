import NProgress from 'nprogress';
import { Router } from 'next/router';
import { useTheme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export function ProgressBar() {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        '#nprogress': {
          pointerEvents: 'none',
          '& .bar': {
            top: 0,
            left: 0,
            height: 4,
            width: '100%',
            position: 'fixed',
            zIndex: theme.zIndex.snackbar,
            backgroundColor: theme.palette.secondary.dark,
            boxShadow: `0 0 2px ${theme.palette.secondary.dark}`,
          },
          '& .peg': {
            right: 0,
            opacity: 1,
            width: 100,
            height: '100%',
            display: 'block',
            position: 'absolute',
            transform: 'rotate(3deg) translate(0px, -4px)',
            boxShadow: `0 0 10px ${theme.palette.secondary.dark}, 0 0 5px ${theme.palette.secondary.dark}`,
          },
        },
      }}
    />
  );
}
