// src/pages/shop/Shop.tsx
import { useDispatch } from 'react-redux';
import { useGetProductsQuery } from '../../core/store/product.api.ts';
import { addToCart } from '../../core/store/shop-cart.store.ts';

export default function Shop () {
  const { data, error, isLoading } = useGetProductsQuery()
  const dispatch = useDispatch();

  if (isLoading) {
    return <div>loading...</div>
  }
  if (error) {
    return <div>Ahia! Server error!</div>
  }
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {
      data?.map(p => {
        return <div key={p.id}>
          <div className="font-bold text-2xl mb-6 flex items-center gap-3">
            {/*NEW*/}
            <button
              className="btn"
              onClick={() => dispatch(addToCart(p))}

            >Add
            </button>
            {p.title}
          </div>
          <img src={p.url} alt={p.title} className="rounded-xl"/>
        </div>
      })
    }
  </div>
}

