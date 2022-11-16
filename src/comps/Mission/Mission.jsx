import React from 'react'
import './mission.scss'
import { ReactComponent as MissionIcon } from '../../img/mission-icon.svg'
import { ReactComponent as Doc } from '../../img/doc.svg'
import Deal from '../../img/mission-deal.png'
import { useState } from 'react';

function Mission() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };
    return (
        <div className="mission">
            <div className="container">
                <div className="mission__wrapper">
                    <div className="mission__left">
                        <MissionIcon />
                        <h3>Наша миссия</h3>
                        <p>Миссия <b>Новелти</b> – создание максимально эффективной логистической компании, лидера по скорости и надёжности предоставления полного комплекса логистических услуг. <span className='pc'>Каждый день благодаря нашей работе мир становится лучше: мы спасаем и улучшаем качество жизни пациентов, больше людей получает доступ к самым современным и эффективным разработкам. Мы любим то, что мы делаем!</span> <button className={isActive ? 'bg-salmon' : ''} onClick={handleClick}> <b>читать ещё</b><span>Каждый день благодаря нашей работе мир становится лучше: мы спасаем и улучшаем качество жизни пациентов, больше людей получает доступ к самым современным и эффективным разработкам. Мы любим то, что мы делаем!</span></button> </p>
                    </div>
                    <div className="mission__right">
                        <div className="l">
                            <h3>Наши <br />ценности</h3>
                            <ul>
                                <li className='pcf'><Doc /> Клиентоориентиро-<br />
                                    ванность</li>
                                <li className='mobf'><Doc /> Клиентоориентированность</li>
                                <li><Doc />Эффективность</li>
                                <li><Doc />Результативность</li>
                                <li><Doc />Честность и открытость</li>
                            </ul>
                        </div>
                        <div className="r"><img src={Deal} alt="Сделка" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission