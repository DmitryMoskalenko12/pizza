import { Swiper, SwiperSlide } from 'swiper/react';
import {A11y} from 'swiper/modules';
import 'swiper/scss';
import Image from 'next/image';
import HeaderH from '@/ui/headerH/headerH';
import { useSelector } from 'react-redux';

const NewProduct = () => {
  const newProduct = useSelector(state => state.newProductSlider.data)
  return (
  <section className='new-product'>
    <div className="container">
      <div className='wrapper'>
          <HeaderH h={'h1'} clazz={'h1'}>Новинки</HeaderH>
          <picture>
            <source
              width={168}
              height={402}
              media="(min-width: 1440px)"
              srcSet="/images/man.webp"
            />
            <source
              width={111}
              height={286}
              media="(min-width: 768px)"
              srcSet="/images/man768.webp"
            />
            <source
              width={73}
              height={97}
              media="(min-width: 320px)"
              srcSet="/images/man320.webp"
            />
            <img className='img-man' src={'/images/firstSection/picture768.webp'} alt='You will see women' width={317} height={360}/>
          </picture>
        <div className='new-product-slider'>
          <Swiper className='swiper-new-product'
            modules={[A11y]}
            grabCursor = {true}
            breakpoints={{
              320: {
                spaceBetween: 15,
                slidesPerView: 1.49,
              },

              768: {
                slidesPerView: 3.3, 
                spaceBetween: 29, 
              },

              1200: {
                spaceBetween: 30,
                slidesPerView: 4,
              },
              
            }}
          >
            {
              newProduct.map(({path, name, id, price}) => {
                return <SwiperSlide key={id} className="slide-new-product">
                        <div className='slide-wrapper'>
                          <Image className='img-product' src={path} width={71} height={71} alt='You will see pizza'/>
                          <div className="slide-subblock">
                            <HeaderH h={'h2'} clazz={'h2'}>{name}</HeaderH>
                            <div className='price'>від {price} грн</div>
                          </div>
                        </div>
                       </SwiperSlide>
              })
            }
          </Swiper>
        </div>
      </div>
    </div>
  </section>
  )
}

export default NewProduct;