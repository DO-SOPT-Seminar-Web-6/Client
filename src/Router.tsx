import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@components/layout/MainLayout';
import Animation from '@pages/Animation';
import Comment from '@pages/Comment';
import Director from '@pages/Director/Director';
import Error from '@pages/Error/Error';
import Main from '@pages/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Main /> },
      { path: '/animation', element: <Animation /> },
      { path: '/main', element: <Main /> },
      { path: '/comments', element: <Comment /> },
      { path: '/director', element: <Director /> },
    ],
  },
]);
