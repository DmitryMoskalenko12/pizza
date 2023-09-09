import classes from './basket.module.scss';
import HeaderH from '@/ui/headerH/headerH';
import BasketCard from '@/module/basketCard/basketCard';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, updateCountProduct } from './basketSlice';
import BasketSlider from '@/module/basketSlider/basketSlider';
import Sauces from '@/module/sauces/sauces';
import { filterId } from '@/helpers/helpers';
import { getBasketProduct } from './basketSlice';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
        </div>
      </div>
    </section>
  )
}

export default Basket;