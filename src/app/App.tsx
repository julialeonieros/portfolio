import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import StyledHeader from '../components/Header';
import { theme } from '../styles/theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledHeader />
    </ThemeProvider>
  );
}

export default App;
