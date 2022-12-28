import Head from 'next/head';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CollapseDrawerProvider } from 'src/contexts/CollapseDrawerContext';
import ThemeConfig from 'src/theme';
import GlobalStyles from 'src/theme/globalStyles';
import createEmotionCache from 'src/utils/createEmotionCache';
import { ProgressBar } from 'src/components/ProgressBar';
import { DefaultSeo } from 'next-seo';
import '../../public/fonts/index.css';
import { BASE_URL } from 'src/config';
import MotionLazyContainer from 'src/components/animate/MotionLazyContainer';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <MotionLazyContainer>
      <CollapseDrawerProvider>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        ></link>

        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: BASE_URL,
            siteName: 'sil.wiki',
          }}
          twitter={{
            handle: '@sil_kreulen',
            site: BASE_URL,
            cardType: 'summary_large_image',
          }}
        />
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
    </MotionLazyContainer>
  );
}
