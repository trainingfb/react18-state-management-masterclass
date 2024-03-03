// /src/pages/home/Home.tsx

import { useLoaderData } from 'react-router-dom';
import { DealOfTheWeek, News, Newsletter, Product } from '../../model/shop-types.ts';

export type HomePageData = {
  newsletter: Newsletter;
  products: Product[];
  dealOfTheWeek: DealOfTheWeek;
  news: News[];
}

export default function HomeOriginal () {
  const data = useLoaderData() as HomePageData;

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

