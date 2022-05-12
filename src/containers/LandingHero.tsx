import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { Stack, Container, Typography, Tabs, Tab, Rating, Grid } from "@mui/material";
import { varFadeInRight } from "../components/animate";
import { useState } from "react";

const RootStyle = styled(motion.div)(() => ({}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  margin: "auto",
  textAlign: "center",
  position: "relative",
  [theme.breakpoints.up("md")]: {
    margin: "unset",
    textAlign: "left"
  }
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const navItems = [
  {
    label: "Career"
  },
  {
    label: "Projects"
  },
  {
    label: "Hard skills"
  },
  { label: "Soft skills" }
];

const skills = [
  { label: "React", score: 4 },
  { label: "Javascript", score: 4 },
  { label: "Typescript", score: 2.5 }
];

export function LandingHero() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <RootStyle initial="initial" animate="animate">
        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h1">Sil Kreulen</Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography>Developer</Typography>
            </motion.div>
          </ContentStyle>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ mb: 5 }}>
            {navItems.map(({ label }, index) => (
              <Tab label={label} {...a11yProps(index)} />
            ))}
          </Tabs>

          <Grid container spacing={{ xs: 1, md: 4 }}>
            {skills.map((skill) => (
              <Grid item xs={12} md={6} lg={4}>
                <Typography component="legend">{skill.label}</Typography>
                <Rating name="half-rating-read" defaultValue={skill.score} precision={0.5} readOnly />
              </Grid>
            ))}
          </Grid>
        </Container>
      </RootStyle>
    </>
  );
}
