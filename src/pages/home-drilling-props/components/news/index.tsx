// /src/pages/home/components/news/index.tsx
import { HomePageData } from '../../Home.tsx';
import NewsletterForm from './NewsletterForm.tsx';

export default function NewsletterBlock (
  props: HomePageData & { onSend: (mail: string) => void}
) {

  return (
    <div>

      <NewsletterForm
        newsletter={props.newsletter}
        products={props.products}
        dealOfTheWeek={props.dealOfTheWeek}
        news={props.news}
        onSend={props.onSend}
      />

      {/*<NewsletterForm{...props}/>*/}

      <h1 className="section-title">News</h1>

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
}

