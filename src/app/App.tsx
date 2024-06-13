import Header from '@components/Header/Header';
import Articles from '@components/Sections/Articles/Articles';
import Introduction from '@components/Sections/Introduction/Introduction';
import FeaturedProject from '@components/Sections/Projects/FeaturedProjects/FeaturedProjects';
import OtherProjects from '@components/Sections/Projects/OtherProjects/OtherProjects';
import Skills from '@components/Sections/Skills/Skills';
import Tech from '@components/Sections/Tech/Tech';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { theme } from '@styles/theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Introduction />
      <Tech />
      <FeaturedProject />
      <OtherProjects />
      <Articles />
      <Skills />
    </ThemeProvider>
  );
}

export default App;
