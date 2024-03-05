// /src/pages/cms/Cms.tsx
import { useAddProductMutation, useDeleteProductMutation, useGetProductsQuery } from './api/productCMS.api.ts';

export default function CMS() {
  const { data } = useGetProductsQuery()
  const [
    deleteUser,
    { isLoading }
  ] = useDeleteProductMutation();

  const [ addUser ] = useAddProductMutation();

  return <div>

    <button className="btn btn-primary"
      onClick={
      () => addUser({ title: `Item${Math.random()}`  })
        .then(() => console.log('added'))
    }
    >Add Random Product</button>

    <div className="flex flex-col gap-3 my-8">
    {
      data?.map(u => {
        return (
          <div key={u.id} className="bg-slate-700 rounded-xl p-3 flex justify-between">
            {u.title}
            <button
              className="btn btn-primary"
              onClick={() => deleteUser(u.id)}>
              delete {isLoading}
            </button>
          </div>)
      })
    }
    </div>

  </div>
};
