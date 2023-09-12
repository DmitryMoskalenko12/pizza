import classes from './pasta1.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import CardList from '@/module/card-list/card-list';
import HeaderH from '@/ui/headerH/headerH';
import { filterId } from '@/helpers/helpers';
import { getBasketProduct } from '../basket/basketSlice';
import { getId } from '@/module/cardProductDetail/cardProductDetailSlice';
import { useState } from 'react';
import Modal from '@/module/modal/modal';
import CardProductDetail from '@/module/cardProductDetail/cardProductDetail';

const Pasta1 = () => {
  const pasta1Data = useSelector(state => state.pasta1.data);
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const getProduct = (id) => {
    const product = filterId(id, pasta1Data)
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
    <section className={classes.pasta1}>
      <div className="container">
        <div className={classes.wrapper}>
           <HeaderH h={'h2'} clazz={classes.h2}>Паста</HeaderH>
           <CardList getIdProd={getIdProd} getProduct={getProduct} data={pasta1Data}/>
        </div>
      </div>   
       <Modal modal={modal} hideOverlay={hideOverlay}><CardProductDetail setModal={setModal}/></Modal>
    </section>
  )
}

export default Pasta1;