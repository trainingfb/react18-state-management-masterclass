// home/store/shop-cart.store.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../model/shop-types.ts';

export const shopCartStore = createSlice({
  name: 'home',
  initialState: [] as Product[],
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      state.push(action.payload)
    },
    deleteFromCart(state, action: PayloadAction<string>) {
      const index = state.findIndex(p => p.id === action.payload)
      state.splice(index, 1)
    }
  }
});

export const { addToCart, deleteFromCart } = shopCartStore.actions
