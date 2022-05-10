import { Icon } from "@iconify/react";
import starFill from "@iconify/icons-eva/star-fill";

const navbarConfig = [
  {
    title: "About",
    path: "/",
    icon: <Icon icon={starFill} />
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <Icon icon={starFill} />
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <Icon icon={starFill} />
  }
];

export { navbarConfig };
