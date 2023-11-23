import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@components/layout/MainLayout';
import Comments from '@pages/Comments/Comments';
import Director from '@pages/Director/Director';
import Error from '@pages/Error/Error';
import Main from '@pages/Main/Main';

export const router = createBrowserRouter([
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
