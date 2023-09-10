import classes from './basket.module.scss';
import HeaderH from '@/ui/headerH/headerH';
import BasketCard from '@/module/basketCard/basketCard';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, updateCountProduct } from './basketSlice';
import BasketSlider from '@/module/basketSlider/basketSlider';
import Sauces from '@/module/sauces/sauces';
import { filterId } from '@/helpers/helpers';
import { getBasketProduct } from './basketSlice';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PromoFinalPrice from '@/module/promoFinalPrice/promo-final-price';

const Basket = () => {
  const basketData = useSelector(state => state.basket.basketArr);
  const saucesData = useSelector(state => state.basket.basketSaucesData);
  const sliderData = useSelector(state => state.basket.basketSliderData);
  const dispatch = useDispatch();

  const emptyBasket = basketData.length === 0 ? <div className={classes.emptyBasket}>Кошик порожній</div> : null;

  const deleteProductBasket = (id) => {
    dispatch(deleteProduct(id))
  }

  const addAdditionalProduct = (id) => {
    const additionalProduct = filterId(id, sliderData)
    dispatch(getBasketProduct(additionalProduct))
  }

  const addAdditionalProductSauces = (id) => {
    const additionalProductSauces = filterId(id, saucesData)
    dispatch(getBasketProduct(additionalProductSauces))
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
            <TransitionGroup>
              {
                basketData.map(({titleName, descr, count, price, path, id}) => {
                  return <CSSTransition key={id} timeout={400} classNames="post">
                    <>
                       <BasketCard  deleteProduct={deleteProductBasket} minus={onMinus} plus={onPlus} id={id} title={titleName} descr={descr} count={count} price={price} path={path}/>
                      <hr className={classes.line}/>
                    </>
                  </CSSTransition>
                })
              }
            </TransitionGroup>
            {emptyBasket}
           </div>

            <BasketSlider sliderData={sliderData} addAdditProduct={addAdditionalProduct}/>
            <Sauces sauces={saucesData} addAdditProductSauces={addAdditionalProductSauces}/>
            <PromoFinalPrice/>

            <div className={classes.backCheck}>
              <Link href={'/'} className={classes.check}>Оформити замовлення 
              <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5625 5.87305C6.82617 5.60938 6.82617 5.16992 6.5625 4.87695L2.57812 0.892578C2.28516 0.628906 1.8457 0.628906 1.58203 0.892578L0.908203 1.56641C0.644531 1.85938 0.644531 2.29883 0.908203 2.5625L3.75 5.4043L0.908203 8.2168C0.644531 8.48047 0.644531 8.91992 0.908203 9.21289L1.58203 9.85742C1.8457 10.1504 2.28516 10.1504 2.57812 9.85742L6.5625 5.87305Z" fill="#231F20"/>
              </svg>
              </Link>
              <Link className={classes.back} href={'/'}> 
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.996094 6.90625C0.732422 7.16992 0.732422 7.60938 0.996094 7.87305L6.67969 13.5859C6.97266 13.8496 7.41211 13.8496 7.67578 13.5859L8.34961 12.9121C8.61328 12.6484 8.61328 12.209 8.34961 11.916L3.83789 7.375L8.34961 2.86328C8.61328 2.57031 8.61328 2.13086 8.34961 1.86719L7.67578 1.19336C7.41211 0.929688 6.97266 0.929688 6.67969 1.19336L0.996094 6.90625Z" fill="#696F7A"/>
              </svg>
              Повернутись до магазину
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Basket;