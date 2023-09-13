import classes from './registration.module.scss';
import HeaderH from '@/ui/headerH/headerH';
import { request } from '@/helpers/request';
import { useState } from 'react';

const Registration = ({setSignIn}) => {
  const [signInOrSignUp, setSignInOrSignUp] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const showSignInOrSignUp = () => {
   setSignInOrSignUp(sign => !sign);
  }

  const onRequest = (e) => {
   e.preventDefault();
   if (!signInOrSignUp) {
    request(name, phone).then(res => {
      setName('');
      setPhone('')
    })
   }
  }

  return (
    <div className={classes.formWrapper}>
      <button onClick={() => setSignIn(false)} className={classes.close}>&times;</button>

      {!signInOrSignUp ? <form onSubmit={onRequest} className={classes.form}>
        <HeaderH h={'h2'} clazz={classes.h2}>Реєстрація на сайті</HeaderH>
        <label className={classes.nameLabel} htmlFor="name">Ім'я</label>
        <input onChange={(e) => setName(e.target.value)} className={classes.name} id='name' value={name} type="text" required placeholder="Ім'я"/>

        <label className={classes.phoneLabel} htmlFor="phone">Телефон</label>
        <input className={classes.phone} onChange={(e) => setPhone(e.target.value)}  id='phone' value={phone} type="number" required placeholder="Телефон"/>
        <button className={classes.button}>Зареєструватися</button>
      </form>
       :
      <form className={classes.form}>
        <HeaderH h={'h2'} clazz={classes.h2}>Увійти на сайт</HeaderH>
        <label className={classes.phoneLabel} htmlFor="phone">Телефон</label>
        <input className={classes.phone} id='phone' type="number" required placeholder="Телефон"/>
        <button className={classes.button}>Увійти</button>
      </form>}

      <button onClick={showSignInOrSignUp} className={classes.logInOrSignUp}>{!signInOrSignUp ? 'Увійти з існуючим обліковим записом' : 'Створити новий аккаунт'}</button>
    </div>
  )
}

export default Registration;