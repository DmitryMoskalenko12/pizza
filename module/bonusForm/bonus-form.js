import HeaderH from '@/ui/headerH/headerH';
import classes from './bonus-form.module.scss';
import { useState, useEffect } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const BonusForm = () => {
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

  const onInputChangeName = async ({oldName, newName}) => {
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
  }
  
  const onInputChangePhone = async ({newPhone, oldPhone}) => {
      const request = await fetch('/api/userPhone/change-phone', {
        method: 'PATCH',
        body: JSON.stringify({newPhone: String(newPhone), oldPhone: String(oldPhone), newName: saveName}),
        headers: {
          'Content-Type': 'application/json'
        },
      })
        
      const res = await request.json();

      setMessagePhone(res.message);
   }

  return (
    <section className={classes.bonusForm}>
      <div className="container">
        <div className={classes.wrapper}>
          <HeaderH clazz={classes.h2} h={'h2'}>Особисті дані</HeaderH>
          <Formik initialValues={{
            oldName: '',
            newName: ''
          }} validationSchema={Yup.object({
            oldName: Yup.string().min(2, 'Мінімум 2 символи').required('Обов\'язкове поле'),
            newName: Yup.string().min(2, 'Мінімум 2 символи').required('Обов\'язкове поле'),
          })} onSubmit={(values, {resetForm}) => (onInputChangeName(values), resetForm())}>
              {({errors, touched}) =>
            <Form className={classes.formName}>
              <label className={classes.nameChange} htmlFor="nameChange">Старе ім'я</label>
              <Field id='nameChange' name='oldName' className={cn(classes.name, {[classes.errorInput]: errors.oldName && touched.oldName})} type="text" placeholder="Старе ім'я"/>
              <ErrorMessage className={classes.error} name='oldName' component={'div'}/>
              <label className={classes.nameChange} htmlFor="nameConfirm">Нове ім'я</label>
              <Field id='nameConfirm' className={cn(classes.name, {[classes.errorInput]: errors.newName && touched.newName})} name='newName' type="text" placeholder="Нове ім'я"/>
              <ErrorMessage className={classes.error} name='newName' component={'div'}/>
              <div className={
                cn({
                [classes.success]: messageName === 'Ім\'я успішно змінене',
                [classes.fail]: messageName !== 'Ім\'я успішно змінене'
                })}>{messageName}</div>
              <button type='submit' className={classes.buttonChange}>Змінити</button>
            </Form>}
          </Formik>
          <Formik initialValues={{
            oldPhone: '',
            newPhone: ''
          }} validationSchema={Yup.object({
            oldPhone: Yup.string().matches(/^380\d{9}$/, 'Введіть корректний номер телефону').required('Обов\'язкове поле'),
            newPhone: Yup.string().matches(/^380\d{9}$/, 'Введіть корректний номер телефону').required('Обов\'язкове поле'),
          })} onSubmit={(values, {resetForm}) => {onInputChangePhone(values), resetForm()}}>
              {({errors, touched}) =>
             <Form className={classes.formPhone}>
              <label className={classes.phoneChange} htmlFor="phoneChange">Старий номер телефону</label>
              <Field id='phoneChange' name='oldPhone' className={cn(classes.phone, {[classes.errorInput]: errors.oldPhone && touched.oldPhone})} type="number" placeholder="Введіть старий телефон"/>
              <ErrorMessage className={classes.error} name='oldPhone' component={'div'}/>
              <label className={classes.phoneChange} htmlFor="phoneChangeNew">Новий номер телефону</label>
              <Field id='phoneChangeNew' name='newPhone' className={cn(classes.phone, {[classes.errorInput]: errors.newPhone && touched.newPhone})} type="number" placeholder="Новий телефон"/>
              <ErrorMessage className={classes.error} name='newPhone' component={'div'}/>
              <div className={
                cn({
                [classes.successPhone]: messagePhone === 'Телефон змінено успішно!',
                [classes.failPhone]: messagePhone !== 'Телефон змінено успішно!'
                })}>{messagePhone}</div>
              <button type='submit' className={classes.buttonChangePhone}>Змінити</button>
            </Form>}
          </Formik>
          <HeaderH clazz={classes.sign} h={'h2'}>Підписки</HeaderH>
          <form className={classes.check}>
            <input type="checkbox" className={classes.inputCheckbox} id='check' name="check"/>
            <label className={classes.labelCheck} htmlFor="check">Повідомляти про бонуси, акції та нові продукти</label>
          </form>
          <button onClick={logoutHandler} className={classes.signOut}>Вихід</button>
        </div>
      </div>
    </section>
  )
}

export default BonusForm;