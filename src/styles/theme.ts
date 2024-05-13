import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: '#1c1b1f',
    },
    primary: {
      main: '#024434',
      light: '#F4F4F4',
    },
    secondary: {
      light: '#fbe3eb',
      main: '#f8cddb',
      dark: '#E0707C',
    },
    background: {
      default: '#fff',
      paper: 'pink',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'serif'].join(','),
    h1: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: '1.5rem',
      fontWeight: 400,
      letterSpacing: '0.04em',
      marginBottom: '8px',

      '@media (max-width:900px)': {
        fontSize: '1.25rem',
      },
      '@media (max-width:600px)': {
        fontSize: '0.85rem',
      },
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.8rem',
      // letterSpacing: '0.01em',
    },
  },
});

export { theme };
