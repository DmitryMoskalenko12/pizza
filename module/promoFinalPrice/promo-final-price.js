import classes from './promo-final-price.module.scss';
import Button from '@/ui/button/button';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFinalPrice } from '@/components/basket/basketSlice';

const PromoFinalPrice = () => {
  const [promo, setPromo] = useState();
  const [usePromo, setUsePromo] = useState('');
  const allProduct = useSelector(state => state.basket.basketArr);
  const sumProduct = allProduct.map((item) => item.price * item.count).reduce((sum, current) => sum + current, 0);
  const sumWithPromo = sumProduct - (sumProduct * 0.20);
  const finalPrice = usePromo.toLowerCase() === 'hello' ? sumWithPromo : sumProduct;
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getFinalPrice(finalPrice))
 },[finalPrice])

  const sendPromo = (e) => {
    setUsePromo(promo)
    e.preventDefault();
  }

  return (
    <div className={classes.wrapper}>
      <form onSubmit={sendPromo} className={classes.form}>
        <label className={classes.promo} htmlFor="promo">Промокод</label>
        <div className={classes.inputBlock}>
          <input onChange={(e) => setPromo(e.target.value)} value={promo} className={classes.input} id='promo' type="text" placeholder='Введіть промокод'/>
          <Button clazz={classes.button}>Застосувати</Button>
        </div>
     </form>

     <div className={classes.blockFinalPrice}>
       <span className={classes.sum}>Сума замовлення:</span>
       <span className={classes.finalSum}>{finalPrice} грн</span>
     </div>
    </div>
  )
}

export default PromoFinalPrice;