// /src/core/store/product.api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from '../../model/shop-types.ts';

export const productApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => `products/`,
      // NEW
      keepUnusedDataFor: 5
    }),
    getUserById: builder.query<Product, string>({
      query: (id) => `products/${id}`,
    }),
  }),
})

export const { useGetProductsQuery, useGetUserByIdQuery } = productApi
