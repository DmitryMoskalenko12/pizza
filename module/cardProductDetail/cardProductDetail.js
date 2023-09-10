import classes from './cardProductDetail.module.scss';
import Image from 'next/image';
import HeaderH from '@/ui/headerH/headerH';
import SliderDetail from '../sliderDetail/slider-detail';
import Button from '@/ui/button/button';
import cn from 'classnames';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBasketProduct } from '@/components/basket/basketSlice';

const CardProductDetail = ({setModal}) => {
  const [activeSize, setActiveSize] = useState(0);
  const [getId, setGetId] = useState(0);
  const dispatch = useDispatch();
  const basketData = useSelector(state => state.basket.basketArr);
  const sliderDetailData = useSelector(state => state.sliderDetail.data);
  const pizza = useSelector(state => state.pizza1.data);
  const pasta = useSelector(state => state.pasta1.data);
  const gamburgers = useSelector(state => state.gamburgers.data);
  const productId = useSelector(state => state.cardDetail.id);
  const combineArr = pizza.concat(pasta, gamburgers);
  const product = combineArr.find(item => item.id === productId);

  const sizes = [
    {content: 'Маленька', clazz: classes.small, price: 0, id: 1},
    {content: 'Середня', clazz: classes.middle, price: 100, id: 2},
    {content: 'Велика', clazz: classes.big, price: 200, id: 3},
    {content: 'Величезна', clazz: classes.thin, price: 300, id: 4},
    {content: 'Традиційна', clazz: classes.traditional, price: 50, id: 5},
  ];

  const res = {...product, price: product.price + (sizes.find(item => item.id === activeSize)?.price ?? 0) + (sliderDetailData.find(item => item.id === getId)?.price ?? 0)};
  
  const getSizes = (id) => {
   setActiveSize(id)
  }

  return(
     <article className={classes.card}>
      <div className={classes.block1}>
        <Image className={classes.img} src={product.path} width={251} height={251} alt='Ypu will see food'/>
        <button onClick={() => setModal(false)} className={classes.close}>&times;</button>
      </div>
       
      <div className={classes.wrapContent}>
        <div className={classes.block2}>
          <HeaderH h={'h2'} clazz={classes.h3}>{product.titleName} <button onClick={() => setModal(false)} className={classes.close2}>&times;</button></HeaderH>
          <div className={classes.descr}>25 см, традиційне тісто, 360 г</div>
          <div className={classes.components}>Моцарелла, соус альфредо</div>
        </div>
        
        <div className={classes.sizesPizza}>
          {
            sizes.map(({content, clazz, id}) => {
              return <button onClick={() => getSizes(id)} key={id} className={cn(clazz, {[classes.activeSize]: id === activeSize})}>{content}</button>
            })
          }
        </div>
        <SliderDetail sliderDetailData={sliderDetailData} getId={setGetId}/>
        <button disabled={basketData.find(item => item.id === res.id)} onClick={() => dispatch(getBasketProduct(res))} className={classes.button}>Додати до кошику {res.price} грн</button>
      </div>
    </article>
   
  )
}

export default CardProductDetail;