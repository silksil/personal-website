import NextLink from "next/link";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography, Container } from "@mui/material";
import { Page } from "src/components/Page";
import { LogoOnlyLayout } from "src/layouts/LogoOnlyLayout";

const RootStyle = styled(Page)(({ theme }) => ({
  display: "flex",
  minHeight: "100%",
  alignItems: "center",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

export default function PageNotFound() {
  return (
    <LogoOnlyLayout>
      <RootStyle title="404 Page Not Found">
        <Container>
          <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
            <Typography variant="h3" paragraph>
              Sorry, page not found!
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 3 }}>Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.</Typography>
            <NextLink href="/">
              <Button size="large" variant="contained">
                Go to Home
              </Button>
            </NextLink>
          </Box>
        </Container>
      </RootStyle>
    </LogoOnlyLayout>
  );
}
