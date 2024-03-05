// /src/pages/cms/api/productCMS.api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from '../../../model/shop-types.ts';

export const productCMSApi = createApi({
  reducerPath: 'productsCMS',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => `/products`,
      providesTags: ['Products'],
      // keepUnusedDataFor: 5,
    }),
    addProduct: builder.mutation<Product, Partial<Product>>({
      query: (body) => ({
        url: '/products',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Products'],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...data}) => ({
        url: `products/${id}`,
        method: 'PATCH',
        body: data,
      }),
      // invalidatesTags: (result, error, id) => [{ type: 'Products', id }],
    })
  }),
})

export const {
  useGetProductsQuery,
  useUpdateProductMutation,
  useAddProductMutation,
  useDeleteProductMutation
} = productCMSApi
