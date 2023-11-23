import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MainLayout from '@components/layout/MainLayout';
import Comments from '@pages/Comments/Comments';
import Director from '@pages/Director/Director';
import Error from '@pages/Error/Error';
import Main from '@pages/Main/Main';
import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Main /> },
      { path: '/main', element: <Main /> },
      { path: '/comments', element: <Comments /> },
      { path: '/director', element: <Director /> },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
