import { Icon } from "@iconify/react";
import message from "@iconify/icons-eva/message-circle-fill";
import code from "@iconify/icons-eva/code-fill";

const navbarConfig = [
  {
    title: "About Me",
    path: "/",
    icon: <Icon icon={code} />
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <Icon icon={message} />
  }
];

export { navbarConfig };
