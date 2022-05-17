import { Grid, Link } from "@mui/material";
import { ProjectCard } from "src/components/Card";

const projects = [
  {
    title: "KMB vs. Vladimir",
    description: "An NFT collection that aimed to raise funds for Ukraine by making fun of Putin.",
    imgSrc: "/static/kmb.png",
    url: "https://www.kmb.world/"
  },
  {
    title: "Stick",
    description: "An app that makes it easy to capture your key learnings of books and podcasts.",
    url: "https://www.figma.com/proto/ZcJ8SwTXlqLO5E7WCRBIwh/Stick?node-id=18%3A955&starting-point-node-id=146%3A0",
    imgSrc: "/static/stick.png"
  }
];

export function Projects() {
  return (
    <Grid container spacing={{ xs: 4, md: 4 }}>
      {projects.map(({ title, description, imgSrc, url }) => (
        <Grid item xs={12} md={6} lg={6}>
          <Link href={url} target="_blank" sx={{ textDecoration: "none" }}>
            <ProjectCard key={title} title={title} description={description} imgSrc={imgSrc} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
