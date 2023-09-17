import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import RouterLayout from './RouterLayout';
import { appChildren } from './appChildren';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RouterLayout />,
    children: [
      {
        path: '/',
        element: <App />,
        children: appChildren,
      },
      {
        path: '/dashboard',
        element: <h1>Dashboard</h1>,
      },
    ],
  },
]);
