import classes from './pizza1.module.scss';
import { useSelector } from 'react-redux';
import CardList from '@/module/card-list/card-list';
import HeaderH from '@/ui/headerH/headerH';
import { filterId } from '@/helpers/helpers';
import { useDispatch } from 'react-redux';
import { getBasketProduct } from '../basket/basketSlice';

const Pizza1 = () => {
  const pizza1Data = useSelector(state => state.pizza1.data);
  const dispatch = useDispatch();

  const getProduct = (id) => {
    const product = filterId(id, pizza1Data)
    dispatch(getBasketProduct(product))
  }
  
  return (
    <section className={classes.pizza1}>
      <div className="container">
        <div className={classes.wrapper}>
           <HeaderH h={'h2'} clazz={classes.h2}>Піца</HeaderH>
           <CardList getProduct={getProduct} data={pizza1Data}/>
        </div>
      </div>
    </section>
  )
}

export default Pizza1;