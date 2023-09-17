import HeaderH from '@/ui/headerH/headerH';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { request } from '@/helpers/request';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import classes from './registration.module.scss';
import cn from 'classnames';

const Registration = ({setSignIn}) => {
  const [signInOrSignUp, setSignInOrSignUp] = useState(false);
  const [success, setSuccess] = useState();
  const router = useRouter();

  const showSignInOrSignUp = () => {
   setSignInOrSignUp(sign => !sign);
  }
  
  useEffect(() => {
   if ((success === 'Обліковий запис успішно створено') || (success === 'Вхід дозволено')) {
    const closeModal = setTimeout(() => {
      setSignIn(false)
      setSuccess('')
    }, 3000);

    return () => clearTimeout(closeModal);
   } else if (success?.length > 1 && success !== 'success') {
    const closeModal = setTimeout(() => {
      setSuccess('')
    }, 3000);

    return () => clearTimeout(closeModal);
   }

  },[success])
 
  const onRequest = async ({name, phone}) => {
   if (!signInOrSignUp) {
    request(name, String(phone)).then(res => {
      setSuccess(res.message)
    })
    .catch(e => {
      setSuccess(e.message)
    })
   } 

   if (signInOrSignUp) {
    const result = await signIn('credentials', {
      redirect: false,
      name: name,
      phone: String(phone),
    })

    if (!result.error) {
      router.replace('/personalPage');
      setSuccess('Вхід дозволено')
    } else {
      setSuccess(result.error)
    }
   }
  }

  return (
    <div className={classes.formWrapper}>
      <button onClick={() => setSignIn(false)} className={classes.close}>&times;</button>

      {!signInOrSignUp ? <Formik initialValues={{
       name:'',
       phone:''
      }} validationSchema={Yup.object({
        name: Yup.string().min(2, 'Мінімум 2 символи').required('Обов\'язкове поле'),
        phone: Yup.string().matches(/^380\d{9}$/, 'Введіть корректний номер телефону').required('Обов\'язкове поле')
      })} onSubmit={(values, {resetForm}) => {onRequest(values); resetForm()}}>
        {({errors, touched}) =>
        <Form className={classes.form}>
        <HeaderH h={'h2'} clazz={classes.h2}>Реєстрація</HeaderH>
        <label className={classes.nameLabel} htmlFor="name">Ім'я</label>
        <Field className={cn(classes.name, {[classes.errorInput]: errors.name && touched.name})} id='name' type="text" name='name' required placeholder="Ім'я"/>
        <ErrorMessage className={classes.error} name='name' component={'div'}/>
        <label className={classes.phoneLabel} htmlFor="phone">Телефон</label>
        <Field className={cn(classes.phone, {[classes.errorInput]: errors.phone && touched.phone})} id='phone' type="number" name='phone' required placeholder="380999999999"/>
        <ErrorMessage className={classes.error} name='phone' component={'div'}/>
        <div className={cn({
          [classes.success]: success === 'Обліковий запис успішно створено',
          [classes.fail]: success !== 'Обліковий запис успішно створено'})}>{success}</div>
        <button type='submit' className={classes.button}>Зареєструватися</button>
      </Form>}
      </Formik>
       :
       <Formik initialValues={{name: '', phone: ''}} validationSchema={Yup.object({
        name: Yup.string().min(2, 'Мінімум 2 символи').required('Обов\'язкове поле'),
        phone: Yup.string().matches(/^380\d{9}$/, 'Введіть корректний номер телефону').required('Обов\'язкове поле')
      })} onSubmit={(values, {resetForm}) => {onRequest(values); resetForm()}}>
        {({errors, touched}) =>
        <Form className={classes.form}>
          <HeaderH h={'h2'} clazz={classes.h2}>Увійти на сайт</HeaderH>
          <label className={classes.nameLabel} htmlFor="name">Ім'я</label>
          <Field className={cn(classes.name, {[classes.errorInput]: errors.name && touched.name})} id='name' name='name' type="text" required placeholder="Ім'я"/>
          <ErrorMessage className={classes.error} name='name' component={'div'}/>
          <label className={classes.phoneLabel} htmlFor="phone">Телефон</label>
          <Field className={cn(classes.phone, {[classes.errorInput]: errors.phone && touched.phone})}  id='phone' name='phone' type="number" required placeholder="Телефон"/>
          <ErrorMessage className={classes.error} name='phone' component={'div'}/>
          <div className={cn({
            [classes.success]: success === 'Вхід дозволено',
            [classes.fail]: success !== 'Вхід дозволено'})}>{success}</div>
          <button className={classes.button}>Увійти</button>
        </Form>}
       </Formik>
     }

      <button onClick={showSignInOrSignUp} className={classes.logInOrSignUp}>{!signInOrSignUp ? 'Увійти з існуючим обліковим записом' : 'Створити новий аккаунт'}</button>
    </div>
  )
}

export default Registration;