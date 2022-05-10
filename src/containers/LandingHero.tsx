import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { Stack, Container, Typography } from "@mui/material";
import { varFadeInRight } from "../components/animate";

const RootStyle = styled(motion.div)(() => ({
  position: "relative",
  height: "80vh"
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  margin: "auto",
  textAlign: "center",
  position: "relative",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up("md")]: {
    margin: "unset",
    textAlign: "left"
  }
}));

export function LandingHero() {
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
        </Container>
      </RootStyle>
    </>
  );
}
