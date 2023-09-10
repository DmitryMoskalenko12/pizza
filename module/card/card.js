import classes from './card.module.scss'
import Image from 'next/image';
import HeaderH from '@/ui/headerH/headerH';
import Button from '@/ui/button/button';

const Card = ({path, titleName, price, descr, getProduct, id, getIdProd}) => {
  return (
    <article className={classes.cardBlock}>
      <div onClick={() => getIdProd(id)} className={classes.cardSubBlock}>
        <Image className={classes.img} src={path} width={253} height={253} alt='You will see pizza'/>
        <div className={classes.descrBlock}>
          <HeaderH h={'h3'} clazz={classes.h3}>{titleName}</HeaderH>
          <p className={classes.descr}>{descr}</p>
        </div>
      </div>
      <div className={classes.priceBasketBlock}>
        <div className={classes.price}>від {price} грн</div>
        <Button id={id} getProduct={getProduct} clazz={classes.button}>В кошик</Button>
      </div>
    </article>
  )
}

export default Card;