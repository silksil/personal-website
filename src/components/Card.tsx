import { CardContent, Typography, Card as BaseCard, Box } from "@mui/material";
import { BoxProps, styled } from "@mui/system";
import React from "react";

interface CardProps extends BoxProps {
  title: string;
  description: string;
  imgSrc: string;
  url?: string;
}

const Card = styled(BaseCard)(({ theme }) => ({
  width: "100%",
  "&:hover": { backgroundColor: theme.palette.background.neutral },

  [theme.breakpoints.up("md")]: {
    width: "400px",
    height: "320px"
  }
}));

export function ProjectCard({ title, description, imgSrc }: CardProps) {
  return (
    <Card>
      <Box component="img" src={imgSrc} sx={{ height: "200px", width: "100%", objectFit: "cover" }} />
      <CardContent>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
}
