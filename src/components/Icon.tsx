import { Icon as BaseIcon } from '@iconify/react';
import { Theme, useTheme } from '@mui/material';
import { BoxProps } from '@mui/system';
import React from 'react';
import { ColorSchema } from 'src/@types/theme';

export type SizeType = 'xs' | 's' | 'm' | 'l' | 'xl';

export type WidthHeightType = number | string;

interface IconProps extends BoxProps {
  size?: SizeType;
  primary?: string;
  icon: any;
  height?: WidthHeightType;
  width?: WidthHeightType;
  color?: ColorSchema;
}

interface getSizeProps {
  size: SizeType;
  width?: WidthHeightType;
  height?: WidthHeightType;
  theme: Theme;
}

const getColor = (color: ColorSchema, theme: Theme) => {
  if (color === 'info') return theme.palette.info.main;
  if (color === 'success') return theme.palette.success.main;
  if (color === 'warning') return theme.palette.warning.main;
  if (color === 'error') return theme.palette.error.main;

  return color;
};

const getWidth = ({ size, width, theme }: getSizeProps) => {
  if (size) return theme.icons[size].width;
  if (width) return width;

  return theme.icons.m.height;
};

const getHeight = ({ size, height, theme }: getSizeProps) => {
  if (size) return theme.icons[size].height;
  if (height) return height;

  return theme.icons.m.height;
};

export function Icon({ size = 'm', color = 'primary', icon, width, height }: IconProps) {
  const theme = useTheme();

  return (
    <BaseIcon
      color={getColor(color, theme)}
      icon={icon}
      height={getHeight({ size, height, theme })}
      width={getWidth({ size, width, theme })}
    />
  );
}
