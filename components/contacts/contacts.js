import classes from './contacts.module.scss';
import Map from '@/ui/map/map';
import Telefon from '@/ui/telefon/telefon';

const Contacts = () =>{
  return (
    <section className={classes.contacts}>
      <div className="container">
        <Map clazz={classes.map}/>
        <div className={classes.contactsBlock}>
           <Telefon clazz={classes.phone}>099 611 7693</Telefon>
           <address className={classes.address}>Миколаїв вул.Тиха 85В</address>
           <p className={classes.del}>Доставка та самовивіз 10:00 - 23:00</p>
        </div>
      </div>
    </section>
  )
}

export default Contacts;