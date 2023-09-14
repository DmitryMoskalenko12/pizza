import classes from './bonus.module.scss';
import HeaderH from '@/ui/headerH/headerH';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';

const Bonus = () => {
  const router = useRouter();

  const logoutHandler =  async () => {
    const data = await signOut({redirect: false, callbackUrl: "/"});
    router.push(data.url)
  }

  return (
    <section className={classes.bonus}>
      <div className="container">
        <div className={classes.wrapper}>
          <HeaderH h={'h2'} clazz={classes.h2}>Мої бонуси</HeaderH>
          <div className={classes.grid}>
            <article className={classes.bonusCard}>
            <Image className={classes.img} src={'/images/rupor.webp'} width={121} height={117} alt='bonus'/>
            <p className={classes.descr}>
              Бонуси з'являться після замовлення
            </p>
            </article>
          </div>
           <Link className={classes.link} href={'/stockPage'}>Всі наші акції</Link>
        </div>
      </div>
      <button onClick={logoutHandler}>Вийти</button>
    </section>
  )
}

export default Bonus;