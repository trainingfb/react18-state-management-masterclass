// /src/pages/home/components/news/index.tsx
import { memo, PropsWithChildren } from 'react';

const NewsletterBlock = memo((props: PropsWithChildren) => {
  console.log('render: news block')

  return (
    <div className="mx-20 mt-8">
      {props.children}
    </div>

  )
})

export default NewsletterBlock;
