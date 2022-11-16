import React from 'react';
import './work.scss';
import Work1 from '../../img/work1.png'
import Work2 from '../../img/work2.png'
import Work3 from '../../img/work3.png'
import { ReactComponent as Road } from '../../img/road.svg'
import { ReactComponent as Carde } from '../../img/carde.svg'
import Cardecar from '../../img/carde-car.png'
function Work() {
    return (
        <section className="work pc">
            <div className="container">

                <div className="title titlew">Как мы работаем?</div>
                <div className="work__cards">
                    <Road className='road' />
                    <div className="work__card">
                        <img src={Work1} alt="этап сотрудничества" className='work1' />
                        <div className="work__data">

                            <div className="work__data-text">
                                <span>01</span>
                                <p>Вы размещаете <br />
                                    <b> заявку</b></p>
                            </div>

                        </div>
                    </div>
                    <div className="work__card">
                        <img src={Work2} alt="этап сотрудничества" className='work2' />
                        <div className="work__data">

                            <div className="work__data-text">
                                <span>02</span>
                                <p>Вместе согласуем <br />
                                    <b> маршрут</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="work__card">
                        <img src={Work3} alt="этап сотрудничества" className='work3' />
                        <div className="work__data">

                            <div className="work__data-text">
                                <span>03</span>
                                <p>Вы размещаете <br />
                                    <b> заявку</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="work__carde">
                        <Carde />
                        <img src={Cardecar} alt="машина для перевозки медикаментов" />
                        <span>Вы можете отследить
                            движение вашего груза
                            с помощью <b>gps</b></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work