// src/pages/shop/Shop.tsx
import { useGetProductsQuery } from '../../core/store/product.api.ts';

export default function Shop () {
  const { data, error, isLoading } = useGetProductsQuery()

  if (isLoading) {
    return <div>loading...</div>
  }
  if (error) {
    return <div>Ahia! Server error!</div>
  }
  return <div>
    {
      data?.map(p => {
        return <li key={p.id}>
          {p.title}
        </li>
      })
    }
  </div>
}

