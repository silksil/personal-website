import { Grid, Typography, alpha, Link } from "@mui/material";
import { styled } from "@mui/system";

const Box = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadiusMd,
  padding: theme.spacing(2, 2),
  textAlign: "center",
  background: alpha(theme.palette.primary.main, 0.05),
  "&:hover": {
    background: alpha(theme.palette.primary.main, 0.2)
  },

  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
    padding: theme.spacing(3)
  },

  [theme.breakpoints.up("md")]: {
    minHeight: 390
  }
}));

interface Item {
  title: string;
  description: string | JSX.Element;
}
interface SoftSkillsProps {
  title: string;
  items: Array<Item>;
}

const ProcessDrivenDescription = () => (
  <div>
    Through reading books, creating my own{" "}
    <Link href="https://aluminum-newsstand-33e.notion.site/New-Project-Template-dcf3aad748114f33864007ae874c2e10" target="_blank">
      working system
    </Link>
    , and having years of experience with Scrum, I feel confident in setting up and leading a process.
  </div>
);

const strenghts = [
  { title: "Empowering team dynamics", description: "Through awareness, empathy, and not avoiding conflict, I foster feedback loops that keep a team focused and improve team dynamics." },
  { title: "Process-driven", description: <ProcessDrivenDescription /> }
];

const weaknesses = [{ title: "Specific skills and knowledge", description: "Because I have no computer science degree and have focused on frontend development, I am lacking a broad base of technical knowledge." }];

const opportunities = [
  { title: "Leadership", description: "Last year I purposively decided to invest time in learning how to lead through reading books and following a course. Made a good start, but I still have a lot of learning to do." },
  { title: "Product/UX ", description: "Because I get excited about good UX and have a good understanding of user needs, I see an opportunity to further develop my product management and UX skills." }
];

const threats = [
  { title: "Energy management", description: "Enthusiasm and drive can cause me to work too much and take too little rest. This can negatively impact my mental health and productivity. Working on this by following certain habits, for example meditation." },
  { title: "Thinking too big", description: "I've worked a year on a personal project that I never shipped due to thinking too big and perfectionism. Consciously trying to work on this through reflection and building in public." }
];

const SWOTBox = ({ title, items }: SoftSkillsProps) => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {title}
      </Typography>
      {items?.map(({ title, description }) => (
        <>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2 }}>
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </>
      ))}
    </Box>
  );
};

export function SoftSkills() {
  return (
    <Grid container spacing={{ xs: 2, md: 4 }}>
      <Grid item xs={12} md={6} lg={6}>
        <SWOTBox title="Strengths" items={strenghts}></SWOTBox>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <SWOTBox title="Opportunities" items={opportunities}></SWOTBox>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <SWOTBox title="Weaknesses" items={weaknesses}></SWOTBox>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <SWOTBox title="Threats" items={threats}></SWOTBox>
      </Grid>
    </Grid>
  );
}
