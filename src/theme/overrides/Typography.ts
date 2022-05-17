import { Theme } from "@mui/material/styles";

export default function Typography(theme: Theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: theme?.palette?.text?.primary
        },
        h2: {
          color: theme?.palette?.text?.primary
        },
        h3: {
          color: theme?.palette?.text?.primary
        },
        h4: {
          color: theme?.palette?.text?.primary
        },
        h5: {
          color: theme?.palette?.text?.primary
        },
        body1: {
          color: theme?.palette?.text?.secondary
        },
        body2: {
          color: theme?.palette?.text?.secondary
        }
        // paragraph: {
        //   marginBottom: theme?.spacing(2)
        // },
        // gutterBottom: {
        //   marginBottom: theme?.spacing(1)
        // }
      }
    }
  };
}
