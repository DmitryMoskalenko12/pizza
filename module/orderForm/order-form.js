import HeaderH from '@/ui/headerH/headerH';
import classes from './order-form.module.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import cn from 'classnames';
import BasketOrderInfo from '../basketOrderInfo/basketOrderInfo';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../modal/modal';
import { useEffect, useState } from 'react';
import useHttp from '@/hooks/http.hook';
import { clearBasketArr, getFinalPrice, getSuccessMessage } from '@/components/basket/basketSlice';
import Success from '../success/success';
import { useRouter } from 'next/router';

const OrderForm = () => {
  const basketArr = useSelector(state => state.basket.basketArr);
  const finalPrice = useSelector(state => state.basket.basketFinalPrice);
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [signIn, setSignIn] = useState(false);
  const router = useRouter();
  const {request} = useHttp();

  const hideOverlay = (e) => {
    if (e.target.getAttribute('data-modal')) {
      setSignIn(false)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => setSignIn(false), 3000);
    () => clearTimeout(timer);
    if (message === 'success') {
     const timer = setTimeout(() => {
      dispatch(getSuccessMessage(''));
      router.push('/')
     },4000);
     
     () => clearTimeout(timer);
    }
  },[message])

  const sendDataToDB = (values) => {
  const {name, phone, address, timeDelivery, card, numberCard, date, cvc} = values;

  const product = {
    name,
    phone,
    address,
    timeDelivery,
    card,
    numberCard,
    date,
    cvc,
    order: basketArr,
  }
  
  request('/api/sendDataToDB/sendDataToDB', 'POST', JSON.stringify({product: product}))
  .then(res => {
    setSignIn(true);
    setMessage(res.message);
    dispatch(clearBasketArr([]));
    dispatch(getFinalPrice(0));
    dispatch(getSuccessMessage(res.message));
  })
  .catch(error => {
    dispatch(clearBasketArr([]));
    dispatch(getFinalPrice(0));
    setSignIn(true);
    setMessage(error);
    dispatch(getSuccessMessage(error));
    })
  }

  return (
    <Formik initialValues={{
      name: '',
      phone: '',
      address: '',
      timeDelivery: '',
      card: '',
      numberCard: '',
      date: '',
      cvc: ''
    }}
    validationSchema={Yup.object({
      name: Yup.string().min(2, 'Мінімум 2 символи').required('Обов\'язкове поле'),
      phone: Yup.string().matches(/^380\d{9}$/, 'Введіть корректний номер телефону').required('Обов\'язкове поле'),
      address: Yup.string().required('Обов\'язкове поле'),
      timeDelivery: Yup.string().required('Обов\'язкове поле'),
      card: Yup.string().oneOf(['1', '2']).required('Виберіть хоча б один варіант оплати'),
      numberCard: Yup.string().required('Обов\'язкове поле'),
      date: Yup.string().required('Дата картки обов\'язкова'),
      cvc: Yup.string().required('CVC обов\'язкове')
    })} onSubmit={(values, {resetForm}) => {sendDataToDB(values); resetForm()}}>
      {({errors, touched}) =>
      <Form className={classes.orderForm}>
        <div className={classes.mainWrapper}>
        <div className={classes.formWrapper}>
          <div className={classes.inputLabel}>
            <label className={classes.label} htmlFor="name">Ім'я</label>
            <Field id='name' type='text' name='name' className={cn(classes.input,{[classes.fail]: errors.name && touched.name})} placeholder="Ім'я"/>
          </div>
          <ErrorMessage name='name' className={classes.error} component={'div'}/>

          <div className={classes.inputLabel}>
          <label className={classes.label} htmlFor='phone'>Номер телефону</label>
          <Field id='phone' type='number' name='phone' className={cn(classes.input,{[classes.fail]: errors.phone && touched.phone})} placeholder="Телефон"/>
          </div>
          <ErrorMessage name='phone' className={classes.error} component={'div'}/>

          <div className={classes.inputLabel}>
          <label className={classes.label} htmlFor="address">Адреса доставки</label>
          <Field as='textarea' type='text' name='address' className={cn(classes.textarea,{[classes.fail]: errors.address && touched.address})} placeholder="Адреса доставки"/>
          </div>
          <ErrorMessage name='address' className={classes.error} component={'div'}/>

          <div className={classes.inputLabel}>
          <label className={classes.label} htmlFor='timeDelivery'>Час доставки</label>
          <Field id='timeDelivery' type='text' name='timeDelivery' className={cn(classes.input,{[classes.fail]: errors.timeDelivery && touched.timeDelivery})} placeholder="Час доставки"/>
          </div>
          <ErrorMessage name='timeDelivery' className={classes.error} component={'div'}/>

          <div className={classes.paySystem}>
            <HeaderH h={'h2'} clazz={classes.h2}>Способи оплати</HeaderH>
            <div className={classes.radio}>
              <Field id='card' className={classes.check} type='radio' value="1" name="card"/>
              <label htmlFor='card' className={classes.cardLabel}> 
                <svg className={classes.svg} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width="31" height="31" fill="url(#pattern0)"/>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_94_10454" transform="scale(0.00666667)"/>
                </pattern>
                <image id="image0_94_10454" width="150" height="150" xlinkHref="data:image/png;base64,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"/>
                </defs>
                </svg>Картою на сайті
              </label>
            </div>
            <ErrorMessage name="card" className={classes.error2} component={'div'}/>
            <Field className={classes.numberCard} type='number' name="numberCard" placeholder='Номер картки'/>
            <ErrorMessage name="numberCard" className={classes.error2} component={'div'}/>
            <div className={classes.cvcBlock}>
              <Field type="number" name="date" className={classes.date} placeholder="20/23"/>
              <div className={classes.cvcWrap}>
              <Field type="number" name="cvc" className={classes.cvc} placeholder="CVC"/>
              </div>
            </div>
            <ErrorMessage name="date" className={classes.error2} component={'div'}/>
            <ErrorMessage name="cvc" className={classes.error2} component={'div'}/>
            <div className={classes.radio2}>
              <Field id='card2' className={classes.check2} type='radio' value="2" name="card"/>
              <label htmlFor='card2' className={classes.cardLabel2}> 
              Готівкою
              </label>
            </div>
            <ErrorMessage name="card" className={classes.error2} component={'div'}/>
          </div>
        </div>
         <BasketOrderInfo/>
         </div>
        <div className={classes.wrapOrderLink}>
          <button disabled={basketArr.length === 0} className={classes.buy}>Оформити замовлення на {finalPrice} &#8372;
            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5625 5.87305C6.82617 5.60938 6.82617 5.16992 6.5625 4.87695L2.57812 0.892578C2.28516 0.628906 1.8457 0.628906 1.58203 0.892578L0.908203 1.56641C0.644531 1.85938 0.644531 2.29883 0.908203 2.5625L3.75 5.4043L0.908203 8.2168C0.644531 8.48047 0.644531 8.91992 0.908203 9.21289L1.58203 9.85742C1.8457 10.1504 2.28516 10.1504 2.57812 9.85742L6.5625 5.87305Z" fill="#231F20"/>
            </svg>
          </button>

          <Link className={classes.back} href={'/basketPage'}> 
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.996094 6.90625C0.732422 7.16992 0.732422 7.60938 0.996094 7.87305L6.67969 13.5859C6.97266 13.8496 7.41211 13.8496 7.67578 13.5859L8.34961 12.9121C8.61328 12.6484 8.61328 12.209 8.34961 11.916L3.83789 7.375L8.34961 2.86328C8.61328 2.57031 8.61328 2.13086 8.34961 1.86719L7.67578 1.19336C7.41211 0.929688 6.97266 0.929688 6.67969 1.19336L0.996094 6.90625Z" fill="#696F7A"/>
            </svg>
            Повернутись до кошика
          </Link>
        </div>
        {message ? <Modal hideOverlay={hideOverlay} modal={signIn}><Success message={message} setSignIn={setSignIn}/></Modal>: null}
     </Form>}
    </Formik>
  )
}

export default OrderForm;