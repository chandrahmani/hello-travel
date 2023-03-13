import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/views/ErrorPage';
import About from './components/views/about/About';
import Contact from './components/views/contact/Contact';
import TermsCondition from './components/views/termsCondition/TermsCondition';
import PrivacyPolicy from './components/views/privacyPolicy/PrivacyPolicy';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'about/',
          element: <About />
        },
        {
          path: 'contact/',
          element: <Contact />
        },
        {
          path: 'termcondition/',
          element: <TermsCondition />
        },
        {
          path: 'privacypolicy/',
          element: <PrivacyPolicy />
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
