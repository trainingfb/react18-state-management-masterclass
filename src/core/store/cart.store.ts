// /src/core/store/cart.store.ts
import { create } from 'zustand';
import { Product } from '../../model/shop-types.ts';

export type CartState = {
  list: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
}
export const cartStore = create<CartState>((set, get) => ({
  list: [],
  addToCart: (product: Product) => {
    set({ list: [...get().list, product] })
  },
  removeFromCart: (id: string) => {
    set({ list: get().list.filter(p => p.id !== id) })
  },
}))
