import classes from './gamburgers.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import CardList from '@/module/card-list/card-list';
import HeaderH from '@/ui/headerH/headerH';
import { filterId } from '@/helpers/helpers';
import { getBasketProduct } from '../basket/basketSlice';

const Gamburgers = () => {
  const gamburgersData = useSelector(state => state.gamburgers.data);
  const dispatch = useDispatch();

  const getProduct = (id) => {
    const product = filterId(id, gamburgersData)
    dispatch(getBasketProduct(product))
  }

  return (
    <section className={classes.gamburgers}>
      <div className="container">
        <div className={classes.wrapper}>
           <HeaderH h={'h2'} clazz={classes.h2}>Гамбургери</HeaderH>
           <CardList getProduct={getProduct} data={gamburgersData}/>
        </div>
      </div>
    </section>
  )
}

export default Gamburgers;