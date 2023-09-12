import classes from './gamburgers.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import CardList from '@/module/card-list/card-list';
import HeaderH from '@/ui/headerH/headerH';
import { filterId } from '@/helpers/helpers';
import { getBasketProduct } from '../basket/basketSlice';
import { useState } from 'react';
import { getId } from '@/module/cardProductDetail/cardProductDetailSlice';
import Modal from '@/module/modal/modal';
import CardProductDetail from '@/module/cardProductDetail/cardProductDetail';

const Gamburgers = () => {
  const gamburgersData = useSelector(state => state.gamburgers.data);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const getProduct = (id) => {
    const product = filterId(id, gamburgersData)
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
    <section className={classes.gamburgers}>
      <div className="container">
        <div className={classes.wrapper}>
           <HeaderH h={'h2'} clazz={classes.h2}>Гамбургери</HeaderH>
           <CardList getIdProd={getIdProd} getProduct={getProduct} data={gamburgersData}/>
        </div>
      </div>
      <Modal modal={modal} hideOverlay={hideOverlay}><CardProductDetail setModal={setModal}/></Modal>
    </section>
  )
}

export default Gamburgers;