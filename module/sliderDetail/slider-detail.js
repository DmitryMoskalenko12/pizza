import { Swiper, SwiperSlide } from 'swiper/react';
import {A11y} from 'swiper/modules';
import 'swiper/scss';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import HeaderH from '@/ui/headerH/headerH';
import { useState } from 'react';
import cn from 'classnames';

const SliderDetail = ({getId, sliderDetailData}) => {
  const [activeSlide, setActiveSlide] = useState();

  const getAddComp = (id) => {
    setActiveSlide(id);
    getId(id);
  }

  return (
    <div className='slider-detail'>
          <Swiper className='swiper-detail'
            modules={[A11y]}
            grabCursor = {true}
            direction='vertical'
            breakpoints={{
              320: {
                spaceBetween: 0,
                slidesPerView: 1.49,
                loop: true
              },

              768: {
                slidesPerView: 4,
                spaceBetween: 0,
              },

              1200: {
                spaceBetween: 0,
                slidesPerView: 4,
              },
              
            }}
          >
            {
              sliderDetailData.map(({path, titleName, id, price}) => {
                return <SwiperSlide key={id} className="slide-detail">
                          <button onClick={() => getAddComp(id)} className={cn('slide-wrapper-detail', {['slide-wrapper-detail-active']: id === activeSlide})}>
                              <Image className='img-product-detail' src={path} width={71} height={71} alt='You will see pizza'/>
                              <div className="slide-subblock-detail">
                                <HeaderH h={'h2'} clazz={'h2-detail'}>{titleName}</HeaderH>
                                <div className='price-detail'>від {price} грн</div>
                              </div>
                          </button>
                      </SwiperSlide>
              })
            }
          </Swiper>
        </div>
  )
}

export default SliderDetail;