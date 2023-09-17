import classes from './order-form.module.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import cn from 'classnames';

const OrderForm = () => {
  return (
    <Formik initialValues={{
      name: '',
      phone: '',
      address: '',
      timeDelivery: ''
    }}
    validationSchema={Yup.object({
      name: Yup.string().min(2, 'Мінімум 2 символи').required('Обов\'язкове поле'),
      phone: Yup.string().matches(/^380\d{9}$/, 'Введіть корректний номер телефону').required('Обов\'язкове поле'),
      address: Yup.string().required('Обов\'язкове поле'),
      timeDelivery: Yup.string().required('Обов\'язкове поле')
    })}>
      {({errors, touched}) =>
      <Form className={classes.orderForm}>
        <label className={classes.label} htmlFor="name">Ім'я</label>
        <Field id='name' type='text' name='name' className={cn(classes.input,{[classes.fail]: errors.name && touched.name})} placeholder="Ім'я"/>
        <ErrorMessage name='name' className={classes.error} component={'div'}/>

        <label className={classes.label} htmlFor='phone'>Номер телефону</label>
        <Field id='phone' type='number' name='phone' className={cn(classes.input,{[classes.fail]: errors.phone && touched.phone})} placeholder="Телефон"/>
        <ErrorMessage name='phone' className={classes.error} component={'div'}/>

        <label className={classes.label} htmlFor="address">Адреса доставки</label>
        <Field as='textarea' type='text' name='address' className={cn(classes.textarea,{[classes.fail]: errors.address && touched.address})} placeholder="Адреса доставки"/>
        <ErrorMessage name='address' className={classes.error} component={'div'}/>

        <label className={classes.label} htmlFor='timeDelivery'>Час доставки</label>
        <Field id='phone' type='text' name='timeDelivery' className={cn(classes.input,{[classes.fail]: errors.timeDelivery && touched.timeDelivery})} placeholder="Час доставки"/>
        <ErrorMessage name='timeDelivery' className={classes.error} component={'div'}/>

        
     </Form>}
    </Formik>
  )
}

export default OrderForm;