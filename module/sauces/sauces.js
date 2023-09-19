import classes from './sauces.module.scss';
import HeaderH from '@/ui/headerH/headerH';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import cn from 'classnames';

const Sauces = ({sauces, addAdditProductSauces}) => {
  const basketData = useSelector(state => state.basket.basketArr);
  const [active, setActive] = useState();

  return (
    <div className={classes.sauces}>
      <div className={classes.wrapper}>
         <HeaderH h={'h2'} clazz={classes.h2}>Соуси до бортиків та закусок</HeaderH>
         <div className={classes.saucesWrapper}>
          {
            sauces.map(({path, titleName, price, id}) => {
              return <article key={id}>
                        <button disabled={basketData.find(item => item.id === id)} onClick={() => {addAdditProductSauces(id); setActive(id)}} key={id} className={cn(classes.saucesCard, {[classes.active]: active === id})}>
                        <Image className={classes.img} src={path} width={66} height={71} alt='sauces'/>
                        <HeaderH h={'h3'} clazz={classes.h3}>{titleName}</HeaderH>
                        <div className={classes.price}>від {price} грн</div>
                      </button>
                    </article>
                 })
            }
         </div>
      </div>
    </div>
  )
}

export default Sauces;