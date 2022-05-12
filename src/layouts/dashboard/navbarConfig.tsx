import { Icon } from "@iconify/react";
import person from "@iconify/icons-eva/person-fill";
import message from "@iconify/icons-eva/message-circle-fill";
import code from "@iconify/icons-eva/code-fill";

const navbarConfig = [
  {
    title: "Home",
    path: "/",
    icon: <Icon icon={person} />
  },
  {
    title: "About",
    path: "/about",
    icon: <Icon icon={code} />
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <Icon icon={message} />
  }
];

export { navbarConfig };
