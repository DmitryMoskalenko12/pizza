import classes from './basketOrderInfo.module.scss';
import HeaderH from '@/ui/headerH/headerH';
import { useSelector } from 'react-redux';

const BasketOrderInfo = () => {
  const productOrder = useSelector(state => state.basket.basketArr);
  const finalPrice = useSelector(state => state.basket.basketFinalPrice);

  return (
    <div className={classes.orderList}>
      <HeaderH h={'h2'} clazz={classes.h2}>Склад замовлення</HeaderH>
      {
        productOrder.length === 0 ? <div className={classes.empty}>Немає товарів</div> : productOrder.map(({titleName, price, descr, id}) => {
          return <div key={id} className={classes.contentWrapper}>
            <div className={classes.wrapContent}>
              <div className={classes.orderTitle}>{titleName}</div>
              <div className={classes.descr}>{descr}</div>
            </div>
            <div className={classes.price}>{price} &#8372;</div>
          </div>
        })
      }
      
      { productOrder.length === 0 ? null : <div className={classes.finalPriceWrap}>
        <div className={classes.sumDescr}>Сума замовлення</div>
        <div className={classes.finalPrice}>{finalPrice} &#8372;</div>
      </div>}

      {
        productOrder.length === 0 ? null : <div className={classes.freeDel}>Безкоштовна доставка</div>
      }

    </div>
  )
}

export default BasketOrderInfo;