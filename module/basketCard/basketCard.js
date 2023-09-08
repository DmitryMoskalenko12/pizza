import classes from './basketCard.module.scss';
import Image from 'next/image';
import HeaderH from '@/ui/headerH/headerH';

const BasketCard = ({title, descr, count, path, price, deleteProduct, plus, minus, id}) => {
  return (
    <article className={classes.card}>
      <div className={classes.cardSubBlock}>
        <Image className={classes.img} src={path} width={71} height={71} alt={'You will see food'}/>
        <div className={classes.descrBlock}>
          <HeaderH clazz={classes.h3} h={'h3'}>{title}</HeaderH>
          <p className={classes.descr}>
            {descr}
          </p>
        </div>
        <div className={classes.price}>{price} грн</div>
        <div className={classes.incDec}>
         <button onClick={() => minus(id)} className={classes.dec}>-</button>
         <span className={classes.number}>{count}</span>
         <button onClick={() => plus(id)} className={classes.inc}>+</button>
        </div>

        <button onClick={() => deleteProduct(id)} className={classes.delete}>&times;</button>
      </div>

      <div className={classes.descrBlock2}>
        <HeaderH clazz={classes.h3} h={'h3'}>{title}</HeaderH>
        <p className={classes.descr}>
          {descr}
        </p>
      </div>
    </article>
  )
}

export default BasketCard;