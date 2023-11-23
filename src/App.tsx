import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Main from '@pages/Main/Animation';
import Comments from '@pages/Comments/Animation';
import Director from '@pages/Director/Animation';
import Error from '@pages/Error/Error';
import Header from '@components/layout/Header/Header';
import Footer from '@components/layout/Footer/Footer';
import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';
import Animation from '@pages/Animation';

const router = createBrowserRouter([
  { path: '/', element: <Main />, errorElement: <Error /> },
  { path: '/main', element: <Main /> },
  { path: '/comments', element: <Comments /> },
  { path: '/director', element: <Director /> },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyle />
      <Header />
      <main>
        <Animation />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
