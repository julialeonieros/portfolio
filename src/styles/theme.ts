import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: '#1c1b1f',
    },
    primary: {
      main: '#024434', // dark green
    },
    secondary: {
      light: '#fbe3eb', // light pink
      main: '#f8cddb', // medium pink
      dark: '#c14753', // dark pink
    },
    background: {
      default: '#f4f4f4',
      paper: '#fff',
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
    h3: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontWeight: 700,
      fontSize: '1.1rem',
      color: '#024434',
      marginTop: '17px',
      marginBottom: '5px',
      lineHeight: '29px',
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontWeight: 700,
      fontSize: '1.3rem',
      color: '#000',
      marginTop: '0px',
      lineHeight: '29px',
    },
    body1: {
      fontSize: '1.06rem',
      fontWeight: 400,
      lineHeight: '1.8rem',
      letterSpacing: '0.01em',
    },
  },
});

export { theme };
