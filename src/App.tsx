import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';
import Header from '@components/layout/Header/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
