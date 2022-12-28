import { Grid, Rating, Typography } from '@mui/material';

const skills = [
  { label: 'React', score: 4.5 },
  { label: 'React Native', score: 3.5 },
  { label: 'Javascript', score: 4 },
  { label: 'Next.js', score: 4 },
  { label: 'Typescript', score: 3.5 },
  { label: 'UX/UI', score: 3 },
  { label: 'Figma', score: 2.5 },
  { label: 'GraphQL', score: 3.5 },
  { label: 'CSS', score: 4 },
  { label: 'ethers.js', score: 2.5 },
  { label: 'Unit + e2e testing', score: 2.5 },
  { label: 'Node.js', score: 2.5 },
];

export function HardSkills() {
  return (
    <Grid container spacing={{ xs: 1, md: 4 }}>
      {skills.map((skill) => (
        <Grid item xs={6} lg={4} sx={{ textAlign: 'center' }} key={skill.label}>
          <Typography component="legend">{skill.label}</Typography>
          <Rating name="half-rating-read" defaultValue={skill.score} precision={0.5} readOnly />
        </Grid>
      ))}
    </Grid>
  );
}
