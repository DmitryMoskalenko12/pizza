import classes from './pizza1.module.scss';
import { useSelector } from 'react-redux';
import CardList from '@/module/card-list/card-list';
import HeaderH from '@/ui/headerH/headerH';
import { filterId } from '@/helpers/helpers';
import { useDispatch } from 'react-redux';
import { getBasketProduct } from '../basket/basketSlice';
import { useState } from 'react';
import { getId } from '@/module/cardProductDetail/cardProductDetailSlice';
import Modal from '@/module/modal/modal';
import CardProductDetail from '@/module/cardProductDetail/cardProductDetail';

const Pizza1 = () => {
  const pizza1Data = useSelector(state => state.pizza1.data);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const getProduct = (id) => {
    const product = filterId(id, pizza1Data)
    dispatch(getBasketProduct(product))
  }
  
  const getIdProd = (id) => {
    setModal(true)
    dispatch(getId(id))
   }

  const hideOverlay = (e) => {
  if (e.target.getAttribute('data-modal')) {
    setModal(false)
  }
  }

  return (
    <section className={classes.pizza1}>
      <div className="container">
        <div className={classes.wrapper}>
           <HeaderH h={'h2'} clazz={classes.h2}>Піца</HeaderH>
           <CardList getIdProd={getIdProd} getProduct={getProduct} data={pizza1Data}/>
        </div>
      </div>
      <Modal modal={modal} hideOverlay={hideOverlay}><CardProductDetail setModal={setModal}/></Modal>
    </section>
  )
}

export default Pizza1;