import classes from './pasta1.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import CardList from '@/module/card-list/card-list';
import HeaderH from '@/ui/headerH/headerH';
import { filterId } from '@/helpers/helpers';
import { getBasketProduct } from '../basket/basketSlice';

const Pasta1 = () => {
  const pasta1Data = useSelector(state => state.pasta1.data);
  const dispatch = useDispatch();

  const getProduct = (id) => {
    const product = filterId(id, pasta1Data)
    dispatch(getBasketProduct(product))
  }

  return (
    <section className={classes.pasta1}>
      <div className="container">
        <div className={classes.wrapper}>
           <HeaderH h={'h2'} clazz={classes.h2}>Паста</HeaderH>
           <CardList getProduct={getProduct} data={pasta1Data}/>
        </div>
      </div>
    </section>
  )
}

export default Pasta1;