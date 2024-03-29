function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

function responsiveFontSizes({ sm, md, lg }: { sm: number; md: number; lg: number }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

const FONT_PRIMARY = 'IBMPlexSans, sans-serif';
const FONT_SECONDARY = 'Inter, sans-serif';

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 800,
  h1: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: 0.8,
    letterSpacing: '-.06em',
    fontSize: pxToRem(48),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 72 }),
  },
  h2: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: 1.1,
    fontSize: pxToRem(32),
    letterSpacing: '-.06em',
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: 1.1,
    fontSize: pxToRem(24),
    letterSpacing: '-.06em',
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 600,
    lineHeight: 1.1,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 600,
    lineHeight: 1.1,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 600,
    lineHeight: 1.1,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(19),
  },
  subtitle2: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    fontFamily: FONT_PRIMARY,
    lineHeight: 1.6,
    fontSize: pxToRem(19),
  },
  body2: {
    fontFamily: FONT_PRIMARY,
    lineHeight: 22 / 14,
    fontSize: pxToRem(15),
  },
  caption: {
    fontFamily: FONT_PRIMARY,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  button: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
} as const;

export default typography;
