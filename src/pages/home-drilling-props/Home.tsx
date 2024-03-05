// /src/pages/home/Home.tsx
import { useLoaderData } from 'react-router-dom';
import { DealOfTheWeek, News, Newsletter, Product } from '../../model/shop-types.ts';
import NewsletterBlock from './components/news';
import ShopBlock from './components/shop';

export type HomePageData = {
  newsletter: Newsletter;
  products: Product[];
  dealOfTheWeek: DealOfTheWeek;
  news: News[];
}

export default function HomeDrillingProps () {
  const data = useLoaderData() as HomePageData;

  function subscribeNewsletter(email: string) {
    console.log('subscribe', email)
  }

  return <div>
    <ShopBlock {...data} />

    <NewsletterBlock {...data} onSend={subscribeNewsletter} />
  </div>
}

