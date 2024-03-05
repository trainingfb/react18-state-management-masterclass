// src/App.tsx
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Navbar } from './core/Navbar.tsx';
import { productApi } from './core/store/product.api.ts';
import { shopCartStore } from './core/store/shop-cart.store.ts';
import { productCMSApi } from './pages/cms/api/productCMS.api.ts';

const rootReducer = combineReducers({
  cart: shopCartStore.reducer,
  products: productApi.reducer,
  productsCMS: productCMSApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      productCMSApi.middleware
    )

});

export type RootState = ReturnType<typeof rootReducer>;

function App() {

  return (
    <Provider store={store}>
      <Navbar />

      <div className="max-w-screen-xl mx-auto my-6">
        <Outlet />
      </div>
    </Provider>
  )
}

export default App
