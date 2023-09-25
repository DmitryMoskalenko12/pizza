import classes from './call-order.module.scss';
import ReactInputMask from 'react-input-mask';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import cn from 'classnames';
import HeaderH from '@/ui/headerH/headerH';
import Button from '@/ui/button/button';
import { useState, useEffect } from 'react';

const CallOrder = ({setSignIn}) => {
  const [messagePhone, setMessagePhone] = useState('');

  useEffect(() => {
    if ((messagePhone === 'Повідомлення успішно відправлено')) {
      const phone = setTimeout(() => {setMessagePhone(''); setSignIn(false)}, 3000);
      () => clearTimeout(phone);
    } else if (messagePhone?.length > 1 && success !== 'Повідомлення успішно відправлено') {
      const closeModal = setTimeout(() => {
        setMessagePhone('');
        setSignIn(false);
      }, 3000);
  
      return () => clearTimeout(closeModal);
     }
  },[messagePhone])

  const onSendPhoneToDB = async ({phone}) => {
    const request = await fetch('/api/sendPhoneToDB/sendPhoneToDB', {
      method: 'POST',
      body: JSON.stringify({phone: String(phone)}),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      
    const res = await request.json();

    setMessagePhone(res.message);
  }

  return (
    <div className={classes.callOrder}>
      <button onClick={() => setSignIn(false)} className={classes.close}>&times;</button>
        <HeaderH clazz={classes.title} h={'h2'}>Ваш номер телефону</HeaderH>
       <Formik initialValues={{
        phone: ''
       }}
       validationSchema={Yup.object().shape({
        phone: Yup.string().matches(/^380\d{9}$/, 'Введіть корректний номер телефону').required('Телефон обов\'язковий')
       })}
       onSubmit={(values, {resetForm}) => {onSendPhoneToDB(values); resetForm()}}>

       {({errors, touched}) =>
       <Form className={classes.form} noValidate>
        <label className={classes.label} htmlFor="phone2">Номер телефону</label>
        <Field name='phone'>
        {({ field }) => (
          <ReactInputMask id='phone2' className={cn(classes.phone, {[classes.errorInput]: errors.phone && touched.phone})} type="text" mask='380999999999' {...field} maskChar={null} required placeholder="380XXXXXXXXX"/>
        )}
        </Field>
        <ErrorMessage className={classes.error} name='phone' component={'div'}/>
        <div className={cn({
            [classes.success]: messagePhone === 'Повідомлення успішно відправлено',
            [classes.fail]: messagePhone !== 'Повідомлення успішно відправлено'})}>{messagePhone}</div>
        <p className={classes.text}>
          Продовжуючи ви погоджуєтесь зі збором та обробкою персональних даних та користувальницькою угодою
        </p>

        <button className={classes.button}>Відправити</button>
       </Form>}
       </Formik>
    </div>
  )
}

export default CallOrder;