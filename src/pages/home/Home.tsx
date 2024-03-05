// /src/pages/home/Home.tsx
import { useCallback, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { DealOfTheWeek, News, Newsletter, Product } from '../../model/shop-types.ts';
import NewsletterForm from './components/news/NewsletterForm.tsx';
import NewsList from './components/news/NewsList.tsx';
import ShopBlock from './components/shop';

export type HomePageData = {
  newsletter: Newsletter;
  products: Product[];
  dealOfTheWeek: DealOfTheWeek;
  news: News[];
}

export default function Home () {
  const data = useLoaderData() as HomePageData;

  const [count, setCount] = useState(1)

  const subscribeNewsletter = useCallback((email: string) => {
    console.log('subscribe', email)
  }, [])


  return <div>
    <button className="btn btn-primary" onClick={() => setCount(s => s + 1)}>{count}</button>

    <ShopBlock {...data} />
    <NewsletterForm{...data} onSend={subscribeNewsletter}/>
    <NewsList {...data} />
  </div>
}

