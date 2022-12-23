import Head from 'next/head';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CollapseDrawerProvider } from 'src/contexts/CollapseDrawerContext';
import ThemeConfig from 'src/theme';
import GlobalStyles from 'src/theme/globalStyles';
import createEmotionCache from 'src/utils/createEmotionCache';
import { ProgressBar } from 'src/components/ProgressBar';
import '../../public/fonts/index.css';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CollapseDrawerProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeConfig>
          <GlobalStyles />
          <ProgressBar />
          <Component {...pageProps} />
        </ThemeConfig>
      </CacheProvider>
    </CollapseDrawerProvider>
  );
}
