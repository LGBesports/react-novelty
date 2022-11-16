import React from 'react'
import './aboutMain.scss'
import MainPic from '../../img/about-main-cargo.png'
import { useState } from 'react';

function AboutMain() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };
    return (
        <div className='about-main'>
            <div className="container">
                <div className="about-main__wrapper">
                    <div className="left">
                        <h1 className="about-main__title">Кто мы?</h1>
                        <p> <b>Компания “Новелти диагностика и терапия”</b> была создана как фарм. дистрибьютор зарубежных производителей радиофарм-
                            препаратов и её основной зада-
                            чей был вывод на российский рынок импортной продукции для ядерной медицины <span className='pc'><br /><br /> Далее мы преобразовались в сервисный центр, который обеспечивает таможенное оформление, доставку, сертификацию, логистические решение, мультимодальные перевозки медицинских грузов, в том числе новых препаратов для проведения клинических исследований.</span> <button className={isActive ? 'bg-salmon' : ''} onClick={handleClick}> <b>читать ещё</b><span> <br /><br /> Каждый день благодаря нашей работе мир становится лучше: мы спасаем и улучшаем качество жизни пациентов, больше людей получает доступ к самым современным и эффективным разработкам. Мы любим то, что мы делаем!</span></button> </p>
                    </div>

                    <div className="right">
                        <img src={MainPic} alt="передача товара клиенту" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMain