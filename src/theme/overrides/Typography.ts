import { alpha, Theme } from '@mui/material/styles';

const shadowIcon = (color: string) => `drop-shadow(4px 4px 4px ${alpha(color, 0.3)})`;

export default function Typography(theme: Theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        h1: {
          filter: shadowIcon(theme.palette.text.primary),
          color: theme?.palette?.text?.primary,
        },
        h2: {
          filter: shadowIcon(theme.palette.text.primary),
          color: theme?.palette?.text?.primary,
        },
        h3: {
          filter: shadowIcon(theme.palette.text.primary),
          color: theme?.palette?.text?.primary,
        },
        h4: {
          color: theme?.palette?.text?.primary,
        },
        h5: {
          color: theme?.palette?.text?.primary,
        },
        body1: {
          color: theme?.palette?.text?.secondary,
        },
        body2: {
          color: theme?.palette?.text?.secondary,
        },
        subtitle1: {
          color: theme?.palette?.text?.disabled,
        },
        paragraph: {
          marginBottom: theme?.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme?.spacing(3),
        },
      },
    },
  };
}
