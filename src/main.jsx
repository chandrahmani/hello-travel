import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/views/ErrorPage';
import AboutPage from './components/views/about/About';
import ContactPage from './components/views/contact/Contact';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'about/',
          element: <AboutPage />
        },
        {
          path: 'contact/',
          element: <ContactPage />
        }
      ]
    }
  ],
  {
    basename: '/hello-travel'
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
