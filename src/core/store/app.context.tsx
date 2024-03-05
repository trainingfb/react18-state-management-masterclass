import { createContext, Dispatch } from 'react';
import { Product } from '../../model/shop-types.ts';
import { Theme } from '../../model/theme.ts';

export interface AppState {
  theme: Theme;
  cartItems: Product[];
}

interface UpdateTheme {
  type: 'updateTheme',
  payload: Theme;
}
interface AddToCart {
  type: 'addToCart',
  payload: Product;
}

type Actions = UpdateTheme | AddToCart;


export function appReducer(s: AppState, action: Actions) {
  switch (action.type) {
    case 'updateTheme':
      return {...s, theme: action.payload}
    case 'addToCart':
      return {...s, cartItems: [...s.cartItems, action.payload]}
  }
  return s;
}


export const AppContext = createContext<AppState | null>(null)
export const AppDispatchContext = createContext<Dispatch<Actions>>(() => null)
