
import { memo, useContext } from 'react';
import { AppContext } from '../../../../core/store/app.context.tsx';

// /src/pages/home/components/news/NewsList.tsx
import { HomePageData } from '../../Home.tsx';

const NewsList = memo((props: HomePageData) => {
  /*NEW*/
  const state = useContext(AppContext)

  console.log('render: NewsList')
  return (
    <div>
      <h1 className="section-title">News { state?.theme }</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {
          props?.news?.map(n => {
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
  )
})

export default NewsList
