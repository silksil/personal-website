import React from "react";
import { IconButton } from "src/components/IconButton";
import { styled } from "@mui/system";
import { alpha, Stack } from "@mui/material";
import { SOCIALS } from "src/utils/socials";
import { Icon, SizeType } from "src/components/Icon";

const shadowIcon = (color: string) => `drop-shadow(2px 2px 2px ${alpha(color, 0.4)})`;

const SocialIcon = styled(Icon)``;

type SocialIconsProps = {
  spacing?: number;
  size?: SizeType;
};
export function SocialIcons({ spacing = 1, size = "m" }: SocialIconsProps) {
  return (
    <Stack direction="row" spacing={spacing}>
      {SOCIALS.map((social) => (
        <IconButton key={social.name} color="primary">
          <Icon size={size} icon={social.icon} />
        </IconButton>
      ))}
    </Stack>
  );
}
