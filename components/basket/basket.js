import classes from './basket.module.scss';
import HeaderH from '@/ui/headerH/headerH';
import BasketCard from '@/module/basketCard/basketCard';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, updateCountProduct } from './basketSlice';
import { Fragment } from 'react';

const Basket = () => {
  const basketData = useSelector(state => state.basket.basketArr);
  const dispatch = useDispatch();
  const emptyBasket = basketData.length === 0 ? <div className={classes.emptyBasket}>Кошик порожній</div> : null
  const deleteProductBasket = (id) => {
    dispatch(deleteProduct(id))
  }

  const onPlus = (id) => {
    dispatch(
      updateCountProduct(
        basketData.map((prod) => {
          if (prod.id === id) {
            return {
              ...prod,
              count: prod.count + 1,
            };
          }
          return prod;
        })
      )
    );
  };

  const onMinus = (id) => {
    dispatch(
      updateCountProduct(
        basketData.map((prod) => {
          if (prod.id === id) {
            return {
              ...prod,
              count: prod.count <= 1 ? 1 : prod.count - 1,
            };
          }
          return prod;
        })
      )
    );
  };

  return (
    <section className={classes.basket}>
      <div className="container">
        <div className={classes.wrapper}>
           <HeaderH h={'h2'} clazz={classes.h2}>Кошик</HeaderH>
           <hr className={classes.hr}/>
           <div className={classes.cardWrapper}>
            {
              basketData.map(({titleName, descr, count, price, path, id}) => {
                return <Fragment key={id}>
                 <BasketCard  deleteProduct={deleteProductBasket} minus={onMinus} plus={onPlus} id={id} title={titleName} descr={descr} count={count} price={price} path={path}/>
                 <hr className={classes.line}/>
                </Fragment>
              })
            }
            {emptyBasket}
           </div>
        </div>
      </div>
    </section>
  )
}

export default Basket;