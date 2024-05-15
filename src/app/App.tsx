import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Header from '../components/Header';
import Introduction from '../components/Sections/Introduction/Introduction';
import Tech from '../components/Sections/Tech/Tech';
import { theme } from '../styles/theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Introduction />
      <Tech />
    </ThemeProvider>
  );
}

export default App;
