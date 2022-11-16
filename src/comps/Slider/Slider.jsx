import React from 'react'
import './slider.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import License1 from '../../img/license1.png'
import License2 from '../../img/license2.png'

function Slider() {
    return (
        <section className='slider'>
            <div className="container">
                <div className="slider-wrapper">
                    <div className="slider__text">
                        <h2>Наши лицензии</h2>
                        <p>Компания <b>“Новелти диагностика и терапия”</b> оказывает полный комплекс логистических услуг в сфере здравоохранения. Для осуществления такой широкой деятельности, не обойтись без специальных документов.
                            <b>“Новелти диагностика и терапия” </b> – лицензированный таможенный брокер, мы имеем право оказывать услуги по таможенному оформлению в любом регионе России и за пределами страны.</p>
                    </div>
                    <div className="slider__slider pc">
                        <Swiper
                            breakpoints={{
                                1400: {
                                    width: 750,
                                    slidesPerView: 2,
                                },
                                920: {
                                    width: 750,
                                    slidesPerView: 2,
                                },
                            }}
                            modules={[Navigation, A11y]}
                            spaceBetween={35}
                            slidesPerView={2}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            navigation
                            pagination={{ clickable: true }}

                        >
                            <SwiperSlide><img src={License1} alt="лицензия" /></SwiperSlide>
                            <SwiperSlide><img src={License2} alt="лицензия" /></SwiperSlide>
                            <SwiperSlide><img src={License2} alt="лицензия" /></SwiperSlide>
                            <SwiperSlide><img src={License2} alt="лицензия" /></SwiperSlide>

                        </Swiper>
                    </div>
                    <div className="slider__slider mob">
                        <Swiper
                            breakpoints={{
                                1400: {
                                    width: 750,
                                    slidesPerView: 1,
                                },
                                768: {
                                    width: 360,
                                    slidesPerView: 1,
                                },
                                100: {
                                    width: 360,
                                    slidesPerView: 1,
                                },
                            }}
                            modules={[Pagination, A11y]}
                            spaceBetween={75}
                            slidesPerView={2}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}


                            pagination={{ clickable: true }}

                        >
                            <SwiperSlide><img src={License1} alt="лицензия" /></SwiperSlide>
                            <SwiperSlide><img src={License2} alt="лицензия" /></SwiperSlide>
                            <SwiperSlide><img src={License1} alt="лицензия" /></SwiperSlide>
                            <SwiperSlide><img src={License2} alt="лицензия" /></SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider