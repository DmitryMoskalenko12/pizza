import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Image from 'next/image';

const MainSlider = () => {
  return (
    <div className='slider-main'>
    <Swiper className='swiper-main'
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
      navigation
  /*     effect='coverflow' */
      grabCursor = {true}
      breakpoints={{
        320: {
          spaceBetween: 10,
          slidesPerView: 1.5,
          initialSlide: 1
        },

        768: {
          slidesPerView: 2, 
          spaceBetween: 20, 
          initialSlide: 1
        },

        1200: {
          spaceBetween: 30,
          slidesPerView: 3.8,
          centeredSlides: true,
          initialSlide: 2       
        },
        
      }}
    >
      <SwiperSlide className="slide"><Image src={'/images/slide1.webp'} width={322} height={322} alt='You will see card-slider'/></SwiperSlide>
      <SwiperSlide className="slide"><Image src={'/images/slide2.webp'} width={322} height={322} alt='You will see card-slider'/></SwiperSlide>
      <SwiperSlide className="slide"><Image src={'/images/slide3.webp'} width={322} height={322} alt='You will see card-slider'/></SwiperSlide>
      <SwiperSlide className="slide"><Image src={'/images/slide4.webp'} width={322} height={322} alt='You will see card-slider'/></SwiperSlide>
      <SwiperSlide className="slide"><Image src={'/images/slide1.webp'} width={322} height={322} alt='You will see card-slider'/></SwiperSlide>
      <SwiperSlide className="slide"><Image src={'/images/slide2.webp'} width={322} height={322} alt='You will see card-slider'/></SwiperSlide>
      <SwiperSlide className="slide"><Image src={'/images/slide3.webp'} width={322} height={322} alt='You will see card-slider'/></SwiperSlide>
      <SwiperSlide className="slide"><Image src={'/images/slide4.webp'} width={322} height={322} alt='You will see card-slider'/></SwiperSlide>
    </Swiper>
   </div>
  )
}

export default MainSlider;