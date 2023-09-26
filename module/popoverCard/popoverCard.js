import classes from './popoverCard.module.scss';
import Image from 'next/image';
import HeaderH from '@/ui/headerH/headerH';

const PopoverCard = ({title, descr, count, price, path, id, minus, plus, deleteProduct, finalPrice, sumProduct}) => {

  return (
    <article>
      <div className={classes.card}>
        <Image src={path} width={71} height={71} alt='You will see product'/>
        <div className={classes.block1}>
            <HeaderH h={'h3'} clazz={classes.h3}>{title}</HeaderH>
            <p className={classes.descr}>{descr}</p>
            <div className={classes.incDec}>
              <button onClick={() => minus(id)} className={classes.dec}>-</button>
              <span className={classes.number}>{count}</span>
              <button onClick={() => plus(id)} className={classes.inc}>+</button>
            </div>
        </div>

        <div className={classes.block2}>
          <button onClick={() => deleteProduct(id)} className={classes.delete}>&times;</button>
          <div className={classes.price}>{price} &#8372;</div>
        </div>
      </div>
      <hr className={classes.hr}/>
    </article>
  )
}

export default PopoverCard;