import { useMemo, ReactNode, Dispatch, SetStateAction } from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import shape from './shape';
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';
import { useLocalStorage } from 'src/hooks/useLocalStorage';
import icons from './icons';

type ThemeConfigProps = {
  children: ReactNode;
};

declare module '@mui/material/styles' {
  interface Theme {
    isLight: boolean;
    setIsLight: Dispatch<SetStateAction<boolean>>;
  }
  interface ThemeOptions {
    setIsLight?: Dispatch<SetStateAction<boolean>>;
  }
}
export default function ThemeConfig({ children }: ThemeConfigProps) {
  const [isLight, setIsLight] = useLocalStorage('themeIsLight', false);

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: isLight ? { ...palette.light, mode: 'light' } : { ...palette.dark, mode: 'dark' },
      shape,
      icons: { ...icons },
      typography,
      breakpoints,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? { ...customShadows.light } : { ...customShadows.dark },
      isLight,
      setIsLight,
    }),
    [isLight, setIsLight]
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
