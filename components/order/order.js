import HeaderH from '@/ui/headerH/headerH';
import classes from './order.module.scss';
import OrderForm from '@/module/orderForm/order-form';

const Order = () => {
  return (
    <section className={classes.order}>
      <hr className={classes.hr}/>
      <div className="container">
        <div className={classes.mainWrapper}>
          <div className={classes.wrapper}>
            <HeaderH clazz={classes.h2} h={'h2'}>Замовлення на доставку</HeaderH>
            <OrderForm/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Order;