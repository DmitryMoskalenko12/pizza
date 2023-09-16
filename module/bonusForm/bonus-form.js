import HeaderH from '@/ui/headerH/headerH';
import classes from './bonus-form.module.scss';
import { useState, useEffect } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';

const BonusForm = () => {
  const [oldName, setOldName] = useState('');
  const [newName, setNewName] = useState('');
  const [oldPhone, setOldPhone] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [messageName, setMessageName] = useState();
  const [messagePhone, setMessagePhone] = useState();
  const [saveName, setSaveName] = useState();
  const router = useRouter();

  const logoutHandler = async () => {
    const data = await signOut({redirect: false, callbackUrl: "/"});
    router.push(data.url)
  }

  useEffect(() => {
    const name = setTimeout(() => setMessageName(''), 3000);
    const phone = setTimeout(() => setMessagePhone(''), 3000);
    () => clearTimeout(name);
    () => clearTimeout(phone);
  },[messageName, messagePhone])

  const onInputChangeName = async (e) => {
   e.preventDefault();
  
    const request = await fetch('/api/userName/change-credentials', {
      method: 'PATCH',
      body: JSON.stringify({oldName: oldName, newName: newName}),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      
    const res = await request.json();

    setMessageName(res.message);
    setSaveName(res.newName);
    setNewName('');
    setOldName('');
  }
  
  const onInputChangePhone = async (e) => {
    e.preventDefault();
      const request = await fetch('/api/userPhone/change-phone', {
        method: 'PATCH',
        body: JSON.stringify({newPhone: newPhone, oldPhone: oldPhone, newName: saveName}),
        headers: {
          'Content-Type': 'application/json'
        },
      })
        
      const res = await request.json();

      setMessagePhone(res.message);
      setOldPhone('');
      setNewPhone('');
   }

  return (
    <section className={classes.bonusForm}>
      <div className="container">
        <div className={classes.wrapper}>
          <HeaderH clazz={classes.h2} h={'h2'}>Особисті дані</HeaderH>
          <form onSubmit={onInputChangeName} className={classes.formName}>
            <label className={classes.nameChange} htmlFor="nameChange">Старе ім'я</label>
            <input id='nameChange' onChange={e => {setOldName(e.target.value)}} value={oldName} className={classes.name} type="text" placeholder="Старе ім'я"/>
            <label className={classes.nameChange} htmlFor="nameConfirm">Нове ім'я</label>
            <input id='nameConfirm' onChange={e => {setNewName(e.target.value)}} value={newName} className={classes.name} type="text" placeholder="Нове ім'я"/>
            <div className={
              cn({
              [classes.success]: messageName === 'Ім\'я успішно змінене',
              [classes.fail]: messageName !== 'Ім\'я успішно змінене'
              })}>{messageName}</div>
            <button className={classes.buttonChange}>Змінити</button>
          </form>

          <form onSubmit={onInputChangePhone} className={classes.formPhone}>
            <label className={classes.phoneChange} htmlFor="phoneChange">Номер телефону</label>
            <input id='phoneChange' onChange={e => setOldPhone(e.target.value)} value={oldPhone} className={classes.phone} type="number" placeholder="Введіть старий телефон"/>
            <label className={classes.phoneChange} htmlFor="phoneChangeNew">Новий номер телефону</label>
            <input id='phoneChangeNew' onChange={e => setNewPhone(e.target.value)} value={newPhone} className={classes.phone} type="number" placeholder="Новий телефон"/>
            <div className={
              cn({
              [classes.successPhone]: messagePhone === 'Телефон змінено успішно!',
              [classes.failPhone]: messagePhone !== 'Телефон змінено успішно!'
              })}>{messagePhone}</div>
            <button className={classes.buttonChangePhone}>Змінити</button>
          </form>
          <button onClick={logoutHandler} className={classes.signOut}>Вихід</button>
        </div>
      </div>
    </section>
  )
}

export default BonusForm;