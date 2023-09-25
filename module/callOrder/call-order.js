import classes from './call-order.module.scss';
import ReactInputMask from 'react-input-mask';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import cn from 'classnames';
import HeaderH from '@/ui/headerH/headerH';
import Button from '@/ui/button/button';

const CallOrder = ({setSignIn}) => {
  return (
    <div className={classes.callOrder}>
      <button onClick={() => setSignIn(false)} className={classes.close}>&times;</button>
        <HeaderH clazz={classes.title} h={'h2'}>Ваш номер телефону</HeaderH>
       <Formik initialValues={{
        phone: ''
       }}
       validationSchema={Yup.object().shape({
        phone: Yup.string().matches(/^380\d{9}$/, 'Введіть корректний номер телефону').required('Телефон обов\'язковий')
       })}>

       {({errors, touched}) =>
       <Form className={classes.form} noValidate>
        <label className={classes.label} htmlFor="phone2">Номер телефону</label>
        <Field name='phone'>
        {({ field }) => (
          <ReactInputMask id='phone2' className={cn(classes.phone, {[classes.errorInput]: errors.phone && touched.phone})} type="text" mask='380999999999' {...field} maskChar={null} required placeholder="380XXXXXXXXX"/>
        )}
        </Field>
        <ErrorMessage className={classes.error} name='phone' component={'div'}/>

        <p className={classes.text}>
          Продовжуючи ви погоджуєтесь зі збором та обробкою персональних даних та користувальницькою угодою
        </p>

        <Button clazz={classes.button}>Відправити</Button>
       </Form>}
       </Formik>
    </div>
  )
}

export default CallOrder;