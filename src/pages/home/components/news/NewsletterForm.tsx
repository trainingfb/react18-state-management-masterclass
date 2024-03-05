
// /src/pages/home/components/news/NewsletterForm.tsx
import { memo, useState } from 'react';
import * as React from 'react';
import { HomePageData } from '../../Home.tsx';

const NewsletterForm = memo((
  props: HomePageData & { onSend: (mail: string) => void}
) => {

  console.log('render: NewsLetterForm')
  const [email, setEmail] = useState('')

  function subscribeNewsletter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEmail('')
    props.onSend(email);
  }

  return (
    <div className="hero  bg-base-200">

      <div className="hero-content flex-col lg:flex-row-reverse">
        {/*texts colum*/}
        <div className="text-center lg:text-left">
          <h1 className="section-title">{props.newsletter.title}</h1>
          <p className="py-6">{props.newsletter.description}</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {/*Newsletter form*/}
          <form className="card-body" onSubmit={subscribeNewsletter}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              {/*NEW*/}
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.currentTarget.value)}
                placeholder="Your email address" className="input input-bordered" required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
})

export default NewsletterForm;
