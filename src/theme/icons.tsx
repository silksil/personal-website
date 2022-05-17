type IconType = { width: number; height: number };

type IconsType = {
  xs: IconType;
  s: IconType;
  m: IconType;
  l: IconType;
  xl: IconType;
};

declare module "@mui/material/styles" {
  interface Theme {
    icons: IconsType;
  }
  interface ThemeOptions {
    icons?: IconsType;
  }
}

const ICON_SIZE = {
  xs: {
    width: 12,
    height: 12
  },
  s: {
    width: 20,
    height: 20
  },
  m: {
    width: 24,
    height: 24
  },
  l: {
    width: 36,
    height: 36
  },
  xl: {
    width: 48,
    height: 48
  }
};

export default ICON_SIZE;
