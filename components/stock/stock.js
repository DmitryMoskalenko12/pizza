import classes from './stock.module.scss';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Button from '@/ui/button/button';
import Link from 'next/link';

const Stock = () => {
  const stockData = useSelector(state => state.stock.data);

  return (
    <section className={classes.stock}>
      <div className="container">
        <div className={classes.wrapper}>
           <h2 className={classes.h2}>Наші <span className={classes.partTitle}>акції</span></h2>

           <div className={classes.stockBlock}>
              {
                stockData.map(({path, id}) => {
                  return <Image className={classes.img} key={id} src={path} width={541} height={405} alt='This is stock'/>
                })
              }
           </div>
           <Link href={'/stockPage'} className={classes.button}>Усі акції</Link>
            <picture>
              <source
                width={219}
                height={479}
                media="(min-width: 1440px)"
                srcSet="/images/girl1440.webp"
              />
              <source
                width={71}
                height={128}
                media="(min-width: 768px)"
                srcSet="/images/girl768.webp"
              />
              <source
                width={69}
                height={100}
                media="(min-width: 320px)"
                srcSet="/images/girl320.webp"
              />
              <img className={classes.girlImg} src={'/images/girl768.webp'} alt='You will see girl' width={71} height={128}/>
            </picture>
        </div>
      </div>
    </section>
  )
}

export default Stock;