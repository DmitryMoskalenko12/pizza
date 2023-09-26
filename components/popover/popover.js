import classes from './popover.module.scss';
import { useSelector } from 'react-redux';
import PopoverCard from '@/module/popoverCard/popoverCard';
import { updateCountProduct, deleteProduct } from '../basket/basketSlice';
import { useDispatch } from 'react-redux';

const Popovers = ({onShowPopover, onHidePopover}) => {
  const basketProduct = useSelector(state => state.basket.basketArr);
  const sumProduct = basketProduct.map((item) => item.price * item.count).reduce((sum, current) => sum + current, 0);
  const finalPrice = useSelector(state => state.basket.basketFinalPrice);
  const dispatch = useDispatch();

  const onPlus = (id) => {
    dispatch(
      updateCountProduct(
        basketProduct.map((prod) => {
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
        basketProduct.map((prod) => {
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
  
  const deleteProductBasket = (id) => {
    dispatch(deleteProduct(id))
  }

  return (
    <div className={classes.popover} onMouseEnter={onShowPopover} onMouseLeave={onHidePopover}>
       {
         basketProduct.length === 0 ? <div className={classes.empty}>Кошик порожній</div> : basketProduct.map(({id, titleName, descr, count, price, path}) => {
          return <PopoverCard key={id} minus={onMinus} plus={onPlus} deleteProduct={deleteProductBasket} id={id} title={titleName} descr={descr} count={count} price={price} path={path}/>
         })
       }

      <div className={classes.finalPrice}>
        <div className={classes.sum}>Сума замовлення</div>
        <div className={classes.finalPrice}>{sumProduct} &#8372;</div>
      </div>
    </div>
  )
}

export default Popovers;