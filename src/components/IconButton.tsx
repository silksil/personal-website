import { forwardRef } from "react";
import { IconButton as BaseIconButton, IconButtonProps } from "@mui/material";
import { ButtonAnimate } from "./animate";

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ children, ...other }, ref) => (
  <ButtonAnimate>
    <BaseIconButton ref={ref} {...other}>
      {children}
    </BaseIconButton>
  </ButtonAnimate>
));

export { IconButton };
