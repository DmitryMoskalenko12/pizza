import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import newProductSlider from '../components/new-product-slider/new-product-slider-slice';
import pasta1 from '../components/pasta1/pasta1Slice';
import pizza1 from '../components/pizza1/pizza1Slice';
import gamburgers from '../components/gamburgers/gamburgersSlice';

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
    newProductSlider,
    pasta1,
    pizza1,
    gamburgers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;