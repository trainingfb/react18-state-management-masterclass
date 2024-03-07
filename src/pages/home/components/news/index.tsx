import { HomePageData } from '../../Home.tsx';
import NewsletterForm from './NewsletterForm.tsx';
import NewsList from './NewsList.tsx';

export default function NewsBlock (props: HomePageData & { onSend: (email: string) => void}) {
  return (
    <div>
      <NewsletterForm {...props} />
      <NewsList {...props} />
    </div>
  )
}

