import * as Yup from 'yup';

export const validationOrderForm = Yup.object().shape({
  name: Yup.string().min(2, 'Мінімум 2 символи').required('Обов\'язкове поле'),
  phone: Yup.string().matches(/^380\d{9}$/, 'Введіть корректний номер телефону').required('Обов\'язкове поле'),
  address: Yup.string().required('Обов\'язкове поле'),
  timeDelivery: Yup.string().required('Обов\'язкове поле'),
  card: Yup.string().oneOf(['1', '2']).required('Виберіть хоча б один варіант оплати'),
  numberCard: Yup.string().when('card', {
    is: '1',
    then: () => Yup.string().required('Обов\'язкове поле'),
    otherwise: () => Yup.string()
  }),
  date: Yup.string().when('card', {
    is: '1',
    then: () => Yup.string().matches(/^(0[1-9]|1[0-9]|2[0-9])\/(0[1-9]|1[0-9]|2[0-9]|30)$/, 'Введіть правильну дату').required('Дата картки обов\'язкова'),
    otherwise: () => Yup.string()
  }),
  cvc: Yup.string().when('card', {
    is: '1',
    then: () => Yup.string().required('CVC обов`язкове'),
    otherwise: () => Yup.string()
  }),
})