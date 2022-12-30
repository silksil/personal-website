import { CardContent, Typography, Card as BaseCard, Box, Chip } from '@mui/material';
import { BoxProps, styled } from '@mui/system';
import React from 'react';

interface CardProps extends BoxProps {
  title: string;
  description: string;
  imgSrc: string;
  url?: string;
  tools: string[];
}

const Card = styled(BaseCard)(({ theme }) => ({
  width: '100%',
  '&:hover': { backgroundColor: theme.palette.background.neutral },

  [theme.breakpoints.up('md')]: {
    width: '400px',
  },
}));

export function ProjectCard({ title, description, imgSrc, tools }: CardProps) {
  return (
    <Card>
      <Box
        component="img"
        src={imgSrc}
        sx={{ height: '200px', width: '100%', objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {description}
        </Typography>
        {tools.map((tool) => (
          <Chip
            variant="outlined"
            color="primary"
            label={tool}
            size="small"
            sx={{ mr: 1 }}
            key={tool}
          />
        ))}
      </CardContent>
    </Card>
  );
}
