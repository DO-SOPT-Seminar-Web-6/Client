
import {RouterProvider} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';
import { router } from 'Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
