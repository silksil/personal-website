import { Typography } from "@mui/material";
import { BoxProps } from "@mui/system";

interface NavSectionProps extends BoxProps {
  title: string;
}

export function PageTitle({ title }: NavSectionProps) {
  return <Typography>{title}</Typography>;
}
