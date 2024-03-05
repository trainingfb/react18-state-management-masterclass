// /src/pages/home/Home.tsx

import axios from 'axios';
import { useEffect, useState } from 'react';
import { DealOfTheWeek, News, Newsletter, Product } from '../../model/shop-types.ts';

export type HomePageData = {
  newsletter: Newsletter;
  products: Product[];
  dealOfTheWeek: DealOfTheWeek;
  news: News[];
}

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


export default function Home () {
  const [data, setData] = useState<HomePageData | null>(null)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    getData()
      .then(result => {
        console.log(result)
        setData(result)
      })
      .catch(e => {
        console.log('error', e)
        setError(true)
      })
  }, []);

  if (error) {
    return (
      <div role="alert" className="alert alert-warning">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none"
             viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
        </svg>
        <span>Warning: Server error! Contact admin!</span>
      </div>

    )
  }

  return <div>

    {/*shop block*/}
    <div className="flex flex-col gap-6">
      {/*Deal of the week*/}
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={data?.dealOfTheWeek.url}
               className="max-w-sm rounded-lg shadow-2xl"/>
          <div>
            <h1 className="text-5xl font-thin">
              {data?.dealOfTheWeek.title}
            </h1>
            <h2 className="text-3xl font-bold">
              € {data?.dealOfTheWeek.promoCost} (<span className="line-through">€ {data?.dealOfTheWeek.cost}</span>)
            </h2>
            <p className="py-6">{data?.dealOfTheWeek.description}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* latest products*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {
          data?.products?.map(n => {
            return (
              <div key={n.id} className="  ">
                <div className="font-bold text-2xl mb-6">{n.title}</div>
                <img src={n.url} alt={n.title} className="rounded-xl"/>
              </div>
            )
          })
        }
      </div>

    </div>


    {/*NEWS MAIN BLOCK*/}
    <div>
      {/*Newsletter BOX*/}
      <div className="hero  bg-base-200">

        <div className="hero-content flex-col lg:flex-row-reverse">
          {/*texts colum*/}
          <div className="text-center lg:text-left">
            <h1 className="section-title">Sign Up Now!</h1>
            <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi, consectetur
              distinctio doloremque ea, enim facilis inventore ipsum maiores maxime molestias nostrum placeat quibusdam,
              recusandae sequi totam vel vero voluptates.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            {/*Newsletter form*/}
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Your email address" className="input input-bordered" required/>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <h1 className="section-title">News</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {
          data?.news?.map(n => {
            return (
              <div key={n.id} className="bg-slate-800 rounded-xl p-2 ">
                <em>{n.date}</em>
                <div className="font-bold text-2xl mb-6">{n.title}</div>
                <div>{n.description}</div>
              </div>
            )
          })
        }
      </div>

    </div>

  </div>
}

