import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import newProductSlider from '../components/new-product-slider/new-product-slider-slice';
import pasta1 from '../components/pasta1/pasta1Slice';
import pizza1 from '../components/pizza1/pizza1Slice';
import gamburgers from '../components/gamburgers/gamburgersSlice';
import stock from '../components/stock/stockSlice';
import basket from '../components/basket/basketSlice';
import sliderDetail from '../module/sliderDetail/slider-detail-slice';
import cardDetail from '../module/cardProductDetail/cardProductDetailSlice';
import stockDataCard from '../components/stockSection/stockSectionSlice';

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
    gamburgers,
    stock,
    basket,
    sliderDetail,
    cardDetail,
    stockDataCard
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;