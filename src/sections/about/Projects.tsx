import { Grid, Link } from '@mui/material';
import { ProjectCard } from 'src/components/Card';

const projects = [
  {
    title: 'KMB vs. Vladimir',
    description:
      'Created a NFT collection that aimed to raise funds for Ukraine by making fun of Putin. Responsible for the smart-contract, UI and front-end.',
    imgSrc: '/static/kmb.png',
    url: 'https://www.kmb.world/',
    tools: ['React', 'ether.js', 'Solidity', 'UI'],
  },
  {
    title: 'Winding Tree',
    description:
      'Worked on the front-end of an open-source accommodation marketplace for the crypto community and digital nomads.',
    url: 'https://github.com/windingtree/win-frontend/pulls?q=is%3Apr+author%3Asilksil',
    imgSrc: '/static/winding-tree.png',
    tools: ['React', 'Typescript', 'web3', 'TanStack Query'],
  },
  {
    title: 'Momentum Health',
    description:
      'Responsible for developing and deploying a mobile app that allows you to detect Scoliosis through 3D technology.',
    url: 'https://www.seespine.ca/',
    imgSrc: '/static/seespine.jpg',
    tools: ['React Native', 'Expo', 'TanStack Query'],
  },
  {
    title: 'Stick',
    description:
      'To develop my Figma skills, I designed an app that makes it easy to capture your key learnings from books and podcasts.',
    url: 'https://www.figma.com/proto/ZcJ8SwTXlqLO5E7WCRBIwh/Stick?node-id=18%3A955&starting-point-node-id=146%3A0',
    imgSrc: '/static/stick.png',
    tools: ['Figma', 'UI', 'UX'],
  },
];

export function Projects() {
  return (
    <Grid container spacing={{ xs: 4, md: 4 }}>
      {projects.map(({ title, url, ...rest }) => (
        <Grid item xs={12} md={6} lg={6} key={title}>
          <Link href={url} target="_blank" sx={{ textDecoration: 'none' }}>
            <ProjectCard key={title} title={title} {...rest} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
