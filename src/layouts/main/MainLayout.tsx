import dynamic from 'next/dynamic';
import { Box, styled } from '@mui/material';

const MainStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: 1,
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
}));

const Header = dynamic(() => import('./Header'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });

type Props = {
  children?: React.ReactNode;
  headerIsFixed?: boolean;
};

export default function MainLayout({ children, headerIsFixed = false }: Props) {
  return (
    <MainStyle>
      <Header headerIsFixed={headerIsFixed} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: { xs: 8, md: 11 },
        }}
      >
        {children}
      </Box>

      <Footer />
    </MainStyle>
  );
}
