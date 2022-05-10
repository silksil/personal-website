import { ReactNode } from "react";

import NextLink from "next/link";
import { styled } from "@mui/material/styles";
import { Logo } from "../components/Logo";

const HeaderStyle = styled("header")(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: "100%",
  position: "absolute",
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(5, 5, 0)
  }
}));

type LogoOnlyLayoutProps = {
  children: ReactNode;
};

export function LogoOnlyLayout({ children }: LogoOnlyLayoutProps) {
  return (
    <>
      <HeaderStyle>
        <NextLink href="/">
          <Logo />
        </NextLink>
      </HeaderStyle>
      {children}
    </>
  );
}
