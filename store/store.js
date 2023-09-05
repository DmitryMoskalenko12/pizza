import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import newProductSlider from '../components/new-product-slider/new-product-slider-slice';

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action,
    });
  }
  return next(action);
};

const store = configureStore({
  reducer: {
    newProductSlider
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;