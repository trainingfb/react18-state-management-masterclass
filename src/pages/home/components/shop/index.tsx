import { HomePageData } from '../../Home.tsx';

export default function ShopBlock (props: HomePageData) {
  return (
    <div className="flex flex-col gap-6">
      {/*Deal of the week*/}
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={props?.dealOfTheWeek.url}
               className="max-w-sm rounded-lg shadow-2xl"/>
          <div>
            <h1 className="text-5xl font-thin">
              {props?.dealOfTheWeek.title}
            </h1>
            <h2 className="text-3xl font-bold">
              € {props?.dealOfTheWeek.promoCost} (<span className="line-through">€ {props?.dealOfTheWeek.cost}</span>)
            </h2>
            <p className="py-6">{props?.dealOfTheWeek.description}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* latest products*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {
          props?.products?.map(p => {
            return (
              <div key={p.id} className="  ">
                <div className="font-bold text-2xl mb-6">{p.title}</div>
                <img src={p.url} alt={p.title} className="rounded-xl"/>
              </div>
            )
          })
        }
      </div>

    </div>

  )
}

