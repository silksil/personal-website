import Iconify from 'src/components/iconify/Iconify';
import { PATHS } from 'src/routes/paths';

const navConfig = [
  {
    title: 'About',
    icon: <Iconify icon="eva:home-fill" />,
    path: PATHS.about,
  },
  {
    title: 'Blog',
    icon: <Iconify icon="eva:book-open-fill" />,
    path: PATHS.blog,
  },
];

export default navConfig;
