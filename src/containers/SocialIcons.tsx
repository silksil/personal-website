import React from "react";
import { IconButton } from "src/components/IconButton";
import { Stack, BoxProps } from "@mui/material";
import { SOCIALS } from "src/utils/socials";
import { Icon, SizeType } from "src/components/Icon";

interface SocialIconsProps extends BoxProps {
  spacing?: number;
  size?: SizeType;
}

export function SocialIcons({ spacing = 1, size = "m", ...props }: SocialIconsProps) {
  return (
    <Stack direction="row" spacing={spacing} {...props}>
      {SOCIALS.map((social) => (
        <a href={social.url} target="_blank">
          <IconButton key={social.name} color="primary">
            <Icon size={size} icon={social.icon} />
          </IconButton>
        </a>
      ))}
    </Stack>
  );
}
