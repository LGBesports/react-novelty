import React from 'react'
import './Whywe.scss'
import { ReactComponent as Bottles } from '../../img/whywe-item2.1.svg'
import { ReactComponent as Termometr } from '../../img/whywe-item2.2.svg'
import { ReactComponent as Electro } from '../../img/icon1.svg'
import { ReactComponent as Box } from '../../img/whywe-item2.3.svg'
import { ReactComponent as Whywebg } from '../../img/whywebg.svg'
import item3 from '../../img/whywe-item3.png'
import item4 from '../../img/whywe-item4.png'
function Whywe() {
    return (
        <section className="whywe">

            <div className="container">
                <Whywebg className='bg' />
                <div className="title">Почему мы?</div>
                <div className="whywe__wrapper">
                    <div className="whywe__item1 whywe__item">
                        <h2><b>с</b> 2013</h2>
                        <p><b>Мы занимаемся доставкой радиофармпрепаратов
                            с ультра-коротким периодом полураспада. *</b><br /><br />*это диагностические и терапевтические лекарственные
                            радиоактивные препараты которые теряют свою активность
                            со временем.</p>
                    </div>
                    <div className="whywe__item2 whywe__item">
                        <div className="left">
                            <div className="whywe__item whywe__item2-1"><Bottles /><p>Располагаем всем
                                необходимым для перевозки
                                опасных грузов на любые
                                расстояния</p></div>
                            <div className="whywe__item whywe__item2-2"><Termometr /><p>Доставляем быстро <Electro /> <br />
                                и безопасно с соблюдением
                                температурного режима</p></div>
                        </div>
                        <div className=" right">
                            <div className="whywe__item whywe__item2-3">
                                <div className="center"><Box /></div>
                                <p>Используем качественные
                                    термоконтейнеры для наших перевозок</p>
                            </div>
                        </div>
                    </div>
                    <div className="whywe__item3 whywe__item">
                        <div className="l">
                            <div className="whywe__item">
                                <h2>Оборудование</h2>
                                <p>Соответствует требованиям
                                    Приказа 646н и СП
                                    3.3.2.3332−16, измерительные
                                    приборы внесены
                                    в Госреестр средств измерений.</p>
                                <h2>Автопарк</h2>
                                <p className='clean'>
                                    <span className="list-item">Объем кузова<span>1,8 м³</span></span>
                                    <span className="list-item">Режим <br />
                                        перевозки<span>-20°С до +12°С</span></span>
                                    <span className="list-item">Грузоподъемность<span>500 кг</span></span>
                                </p>
                            </div>

                        </div>
                        <div className="r">
                            <div className="whywe__item">
                                <img src={item3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="whywe__item4 whywe__item">
                        <img src={item4} alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Whywe