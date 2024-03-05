// main.tsx
import axios from 'axios';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import Cms from './pages/cms/Cms.tsx';
import Home, { HomePageData } from './pages/home/Home.tsx';
import Shop from './pages/shop/Shop.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,

      },
      {
        path: "cms",
        element: <Cms />,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
