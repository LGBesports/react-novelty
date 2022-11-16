import React from 'react'
import './cars.scss'
import Cars1 from '../../img/cars-1.png'
import Cars2 from '../../img/cars-2.png'
import Cars3 from '../../img/cars-3.png'
import Cars4 from '../../img/cars-4.png'
import Cars5 from '../../img/cars-5.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Cars() {
    return (
        <div className='cars'>
            <div className="container">
                <div className="title carst">Наш автопарк</div>
                <div className="cars-slider">
                <Swiper
                            breakpoints={{
                                1400: {
                                    width: 750,
                                    slidesPerView: 1,
                                },
                                768: {
                                    width: 328,
                                    slidesPerView: 1,
                                },
                                100: {
                                    width: 328,
                                    slidesPerView: 1,
                                },
                            }}
                            modules={[Pagination, A11y]}
                            spaceBetween={35}
                            slidesPerView={2}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            
                            
                            pagination={{ clickable: true }}

                        >
                            <SwiperSlide><img src={Cars1} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={Cars1} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={Cars1} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={Cars1} alt="" /></SwiperSlide>

                        </Swiper>
                </div>
                <div className="cars-wrapper">
                    <div className="cars__item"><img className='full' src={Cars1} alt="автопарк" /></div>
                    <div className="cars__item">
                        <div className="left"><img src={Cars2} alt="автопарк" /></div>
                        <div className="right"><img src={Cars3} alt="автопарк" /></div>
                    </div>
                    <div className="cars__item">
                        <div className="left"><img src={Cars4} alt="автопарк" /></div>
                        <div className="right"><img src={Cars5} alt="автопарк" /></div>
                    </div>
                    <div className="cars__item text">
                        <ul>
                            <li><span>Объем кузова</span><div className="line"></div><h3>1,8 м³</h3></li>
                            <li><span>Режим перевозки</span><div className="line"></div><h3>-20°С до +12°С</h3></li>
                            <li><span>Грузоподъемность</span><div className="line"></div><h3>500 кг</h3></li>
                            <li><span>Итальянская холодильная установка</span><div className="line"></div><h3>Zanotti</h3></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Cars