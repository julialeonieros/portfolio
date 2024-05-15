import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Header from '../components/Header';
import Introduction from '../components/Introduction/Introduction';
import { theme } from '../styles/theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Introduction />
    </ThemeProvider>
  );
}

export default App;
