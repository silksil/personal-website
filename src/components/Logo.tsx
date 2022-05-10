import React from "react";
import { Box, BoxProps } from "@mui/material";

const Logo = React.forwardRef<any, BoxProps>(({ sx }, ref) => {
  return (
    <Box ref={ref} sx={{ width: 40, height: 40, cursor: "pointer", ...sx }}>
      <img src="/static/logo.png" />
    </Box>
  );
});

export { Logo };
