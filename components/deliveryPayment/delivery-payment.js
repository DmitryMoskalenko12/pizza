import classes from './delivery-payment.module.scss';
import HeaderH from '@/ui/headerH/headerH';
import Image from 'next/image';
import Map from '@/ui/map/map';

const DeliveryPayment = () => {
  return (
    <section className={classes.deliveryPayment}>
      <div className="container">
        <div className={classes.wrapper}>
          <HeaderH h={'h2'} clazz={classes.h2}>Оплата і доставка</HeaderH>

          <div className={classes.deliveryBlock}>
             <div className={classes.subBlock}>
                <div className={classes.imgBlock}>
                  <Image src={'/images/del1.webp'} width={44} height={44} alt={'You will see shop'}/>
                </div>
                <p className={classes.descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
             </div>

             <div className={classes.subBlock}>
                <div className={classes.imgBlock}>
                  <Image src={'/images/del2.webp'} width={44} height={44} alt={'You will see screen'}/>
                </div>
                <p className={classes.descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
             </div>

             <div className={classes.subBlock}>
                <div className={classes.imgBlock}>
                  <Image src={'/images/del3.webp'} width={44} height={44} alt={'You will see bus'}/>
                </div>
                <p className={classes.descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
             </div>

              <div className={classes.subBlock}>
                <div className={classes.imgBlock}>
                  <Image src={'/images/del4.webp'} width={44} height={44} alt={'You will see bus'}/>
                </div>
                <p className={classes.descr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
             </div>
          </div>
          <Map/>
        </div>
      </div>
    </section>
  )
}

export default DeliveryPayment;