import { HomePageData } from '../../Home.tsx';
import NewsletterForm from './NewsletterForm.tsx';
import NewsList from './NewsList.tsx';

export default function NewsBlock (props: HomePageData & { onSend: (email: string) => void}) {
  return (
    <div>
      <NewsletterForm
        newsletter={props.newsletter}
        products={props.products}
        dealOfTheWeek={props.dealOfTheWeek}
        news={props.news}
        onSend={props.onSend}
      />

      <NewsList
        newsletter={props.newsletter}
        products={props.products}
        dealOfTheWeek={props.dealOfTheWeek}
        news={props.news}
      />
    </div>
  )
}

