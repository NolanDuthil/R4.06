import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root.jsx';
import About from './routes/about.jsx';
import Buy, {loader as buyLoader} from './routes/buy.jsx';

import './index.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/buy',
        element: <Buy />,
        loader: buyLoader
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  },
]);

const rootElement = document.querySelector('#root');

if (rootElement) {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
} else {
  console.error('No root element found');
}
