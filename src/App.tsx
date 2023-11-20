import { ThemeProvider } from 'styled-components';
import Dummy from '@components/Dummy';
import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Dummy />
    </ThemeProvider>
  );
}

export default App;
