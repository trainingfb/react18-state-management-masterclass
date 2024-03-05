// main.tsx
import axios from 'axios';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import Cms from './pages/cms/Cms.tsx';
import HomeDrillingProps from './pages/home-drilling-props/Home.tsx';
import Home, { HomePageData } from './pages/home/Home.tsx';
import Shop from './pages/shop/Shop.tsx';


// NEW
export async function getData(): Promise<HomePageData> {
  const newsletter = await axios.get('http://localhost:3000/newsletter');
  const products = await axios.get('http://localhost:3000/products');
  const dealOfTheWeek = await axios.get('http://localhost:3000/dealOfTheWeek');
  const news = await axios.get('http://localhost:3000/news');

  return {
    newsletter: newsletter.data,
    products: products.data,
    dealOfTheWeek: dealOfTheWeek.data,
    news: news.data,
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: '/',
        element: <Home />,
        // NEW
        loader: async () => {
          return await getData()
        },
        // NEW
        errorElement: <div>Server Error</div>
      },
      {
        path: '/home-drilling-props',
        element: <HomeDrillingProps />,
        // NEW
        loader: async () => {
          return await getData()
        },
        // NEW
        errorElement: <div>Server Error</div>
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
