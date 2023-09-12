import classes from './stockCard.module.scss';
import Image from 'next/image';
import HeaderH from '@/ui/headerH/headerH';
import Link from 'next/link';

const StockCard = ({path, title, descr, id}) => {
  return (
    <article className={classes.stockCard}>
      <Image className={classes.img} src={path} width={300} height={158} alt='You will see stock'/>
      <div className={classes.content}>
        <HeaderH h={'h3'} clazz={classes.h3}>{title}</HeaderH>
        <p className={classes.descr}>
        {descr}
        </p>
        <Link className={classes.link} href={`/stockPage/${id}`}>Подивитись</Link>
      </div>
    </article>
  )
}

export default StockCard;