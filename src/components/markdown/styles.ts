import { Box } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

const StyledMarkdown = styled(Box)(({ theme }) => {
  const isLight = theme.palette.mode === 'light';

  return {
    '& ul, & ol': {
      ...theme.typography.body1,
      color: theme.palette.text.secondary,
      paddingLeft: 0,
      listStylePosition: 'inside',
    },

    // Blockquote
    '& blockquote': {
      lineHeight: 1.5,
      fontSize: '1em',
      margin: '32px auto',
      position: 'relative',
      fontFamily: 'Georgia, serif',
      padding: theme.spacing(3, 3, 3, 8),
      borderRadius: Number(theme.shape.borderRadius) * 2,
      backgroundColor: theme.palette.background.neutral,
      color: `${theme.palette.text.secondary} !important`,
      [theme.breakpoints.up('md')]: {
        width: '80%',
      },
      '& p, & span': {
        marginBottom: '0 !important',
        fontSize: 'inherit !important',
        fontFamily: 'Georgia, serif !important',
        color: `${theme.palette.text.secondary} !important`,
      },
      '&:before': {
        left: 16,
        top: -8,
        display: 'block',
        fontSize: '3em',
        content: '"\\201C"',
        position: 'absolute',
        color: theme.palette.text.disabled,
      },
    },

    // Code Block
    '& pre, & pre > code': {
      margin: theme.spacing(4, 0),
      fontSize: 16,
      overflowX: 'auto',
      whiteSpace: 'pre',
      padding: theme.spacing(1),
      color: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: isLight ? theme.palette.grey[900] : alpha(theme.palette.grey[500], 0.16),
    },
    '& code': {
      // fontSize: 14,
      borderRadius: 4,
      whiteSpace: 'pre',
      padding: theme.spacing(0.2, 0.5),
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.background.paper,
      '&.hljs': { padding: 0, backgroundColor: 'transparent' },
    },
  };
});

export default StyledMarkdown;
