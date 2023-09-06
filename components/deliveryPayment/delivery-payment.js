import classes from './delivery-payment.module.scss';
import HeaderH from '@/ui/headerH/headerH';
import Image from 'next/image';

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

          <iframe className={classes.map} src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d59848.684482051336!2d31.964529475701312!3d46.97217153188883!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1694000285645!5m2!1sru!2sua" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  )
}

export default DeliveryPayment;