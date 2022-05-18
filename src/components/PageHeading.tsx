import { Typography } from "@mui/material";
import { BoxProps, styled, alpha } from "@mui/system";

interface NavSectionProps extends BoxProps {
  title: string;
}

const shadowIcon = (color: string) => `drop-shadow(6px 6px 6px ${alpha(color, 0.4)})`;

const Heading = styled(Typography)(({ theme }) => ({
  filter: shadowIcon(theme.palette.text.primary)
}));

export function PageHeading({ title }: NavSectionProps) {
  return <Heading variant="h2">{title}</Heading>;
}
