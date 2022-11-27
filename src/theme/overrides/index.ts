import { merge } from 'lodash';
import { Theme } from '@mui/material/styles';
import Tabs from './Tabs';
import Lists from './Lists';
import Paper from './Paper';
import Drawer from './Drawer';
import Rating from './Rating';
import Button from './Button';
import Typography from './Typography';
import Avatar from './Avatar';
import Chip from './Chip';

export default function ComponentsOverrides(theme: Theme) {
  return merge(Tabs(theme), Lists(theme), Paper(theme), Button(theme), Rating(theme), Drawer(theme), Typography(theme), Avatar(theme), Chip(theme));
}
