import { Box, Link, List, ListItem, Typography } from '@mui/material';
import { snakeCase } from 'change-case';
import { IHeadings } from 'src/@types/blog';
import { useHeadsObserver } from 'src/hooks/useActiveContent';
import typography from 'src/theme/typography';

export const BlogToc = ({ headings }: { headings: IHeadings }) => {
  const { activeId } = useHeadsObserver();

  return (
    <Box
      aria-label="Table of contents"
      component="nav"
      sx={{
        border: 3,
        borderColor: { xs: 'background.paper' },
        p: 2,
        borderRadius: 1,
      }}
    >
      <Typography component="h2" variant="h6">
        Table of contents
      </Typography>
      <List>
        {headings.map((heading) => {
          const marginLeft = heading.level === 2 ? 0 : heading.level;
          const id = snakeCase(heading.text);
          const color = id === activeId ? 'primary.main' : 'text.secondary';

          return (
            <ListItem
              key={heading.text}
              component={Link}
              color={color}
              href={`#${snakeCase(heading.text)}`}
              sx={{ ...typography.body2, ml: marginLeft, pl: 0 }}
            >
              {heading.text}
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
