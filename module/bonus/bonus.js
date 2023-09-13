import classes from './bonus.module.scss';
import HeaderH from '@/ui/headerH/headerH';
import Image from 'next/image';
import Link from 'next/link';

const Bonus = () => {
  return (
    <section className={classes.bonus}>
      <div className="container">
        <div className={classes.wrapper}>
          <HeaderH h={'h2'} clazz={classes.h2}>Мої бонуси</HeaderH>
          <article className={classes.bonusCard}>
           <Image className={classes.img} src={'/images/rupor.webp'} width={121} height={117} alt='bonus'/>
           <p className={classes.descr}>
             Бонуси з'являться після замовлення
           </p>
          </article>
           <Link className={classes.link} href={'/stockPage'}>Всі наші акції</Link>
        </div>
      </div>
    </section>
  )
}

export default Bonus;