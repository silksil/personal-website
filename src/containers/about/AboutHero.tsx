import { Container, Typography, Avatar } from "@mui/material";
import { SocialIcons } from "../SocialIcons";

export function AboutHero() {
  return (
    <Container maxWidth="xs" sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 6, textAlign: "center" }}>
      <Avatar src="/static/sil.png" sx={{ width: 100, height: 100 }} />
      <Typography variant="h2">Sil Kreulen</Typography>
      <Typography>I am a front-end developer who is passionate about beautiful UX and web3.</Typography>
      <SocialIcons />
    </Container>
  );
}
