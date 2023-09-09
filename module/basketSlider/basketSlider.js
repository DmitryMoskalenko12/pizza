import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y} from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Image from 'next/image';
import HeaderH from '@/ui/headerH/headerH';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { useState } from 'react';

const BasketSlider = ({addAdditProduct, sliderData}) => {
  const basketData = useSelector(state => state.basket.basketArr);

  const [active, setActive] = useState();

  return (
    <div className={'wrapper-slider-basket'}>
      <HeaderH clazz={'h2-basket'} h={'h2'}>Додати до замовлення?</HeaderH>
      <div className='slider-basket'>
        <Swiper className='swiper-basket'
          modules={[Navigation, Scrollbar, A11y]}
          scrollbar={{ draggable: true }}
          navigation
          grabCursor = {true}
          breakpoints={{
            320: {
              spaceBetween: 15,
              slidesPerView: 1.150
            },

            768: {
              slidesPerView: 2.5, 
              spaceBetween: 20
            },

            1200: {
              spaceBetween: 13,
              slidesPerView: 3
            },
            
          }}
        >
          {
            sliderData.map(({path, descr, price, id}) => {
              return <SwiperSlide  key={id} className="slide-basket">
                       <button disabled={basketData.find(item => item.id === id)} onClick={() => {addAdditProduct(id); setActive(id)}} className={cn('card-basket-wrap', {['card-basket-active']: id === active})}>
                         <Image className='slider-img-basket' src={path} width={71} height={71} alt='Milkshake'/>
                         <div className='card-descr-price'>
                            <p className='slider-descr'>{descr.length > 32 ? descr.slice(0, 32) + '...': descr}</p>
                            <div className='slider-price'>від {price} грн</div>
                         </div>
                       </button>
                     </SwiperSlide>
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default BasketSlider;