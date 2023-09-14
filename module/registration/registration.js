import classes from './registration.module.scss';
import HeaderH from '@/ui/headerH/headerH';
import { request } from '@/helpers/request';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

const Registration = ({setSignIn}) => {
  const [signInOrSignUp, setSignInOrSignUp] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState();
  const router = useRouter();

  const showSignInOrSignUp = () => {
   setSignInOrSignUp(sign => !sign);
  }
  
  useEffect(() => {
   if (success === 'success') {
    const closeModal = setTimeout(() => {
      setSignIn(false)
      setSuccess('')
    }, 3000);

    return () => clearTimeout(closeModal);
   } else if (success?.length > 1 && success !== 'success') {
    const closeModal = setTimeout(() => {
      setSignIn(false)
      setSuccess('')
    }, 3000);

    return () => clearTimeout(closeModal);
   }

  },[success])
 
  const onRequest = async (e) => {
   e.preventDefault();
   if (!signInOrSignUp) {
    request(name, phone).then(res => {
      setSuccess(res.message)
      setName('');
      setPhone('');
    })
    .catch(e => {
      setName('');
      setPhone('');
      setSuccess(e.message)
    })
   } 

   if (signInOrSignUp) {
    const result = await signIn('credentials', {
      redirect: false,
      name: name,
      phone: phone,
    })
     
    if (!result.error) {
      router.replace('/personalPage');
      setName('');
      setPhone('');
      setSuccess('Ви успішно авторизувалися!')
    } else {
      setName('');
      setPhone('');
      setSuccess('Вхід не виконаний! Спробуйте ще раз!')
    }
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
        <input className={classes.phone} onChange={(e) => setPhone(e.target.value)} id='phone' value={phone} type="number" required placeholder="Телефон"/>
        {success}
        <button className={classes.button}>Зареєструватися</button>
      </form>
       :
      <form onSubmit={onRequest} className={classes.form}>
        <HeaderH h={'h2'} clazz={classes.h2}>Увійти на сайт</HeaderH>
        <label className={classes.nameLabel} htmlFor="name">Ім'я</label>
        <input onChange={(e) => setName(e.target.value)} className={classes.name} id='name' value={name} type="text" required placeholder="Ім'я"/>
        <label className={classes.phoneLabel} htmlFor="phone">Телефон</label>
        <input onChange={(e) => setPhone(e.target.value)} className={classes.phone} id='phone' type="number" value={phone} required placeholder="Телефон"/>
        {success}
        <button className={classes.button}>Увійти</button>
      </form>}

      <button onClick={showSignInOrSignUp} className={classes.logInOrSignUp}>{!signInOrSignUp ? 'Увійти з існуючим обліковим записом' : 'Створити новий аккаунт'}</button>
    </div>
  )
}

export default Registration;