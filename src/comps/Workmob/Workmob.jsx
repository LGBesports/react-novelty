import React from 'react'
import './workmob.scss'
import Carmob from '../../img/carmob.png'
function Workmob() {
    return (

        <div className='workmob mob'>
            <div className="container">
                <div className="workmob__top">
                    <div className="title titlew">Как мы работаем?</div>
                    <div className="work__data">

                        <div className="work__data-text">
                            <span>01</span>
                            <p>Вы размещаете <br />
                                <b> заявку</b></p>
                        </div>

                    </div>
                    <div className="work__data">

                        <div className="work__data-text">
                            <span>02</span>
                            <p>Вместе согласуем <br />
                                <b> маршрут</b></p>
                        </div>
                    </div>
                    <div className="work__data last">

                        <div className="work__data-text">
                            <span>03</span>
                            <p>Вы размещаете <br />
                                <b> заявку</b></p>
                        </div>
                    </div>
                </div>
                <div className="workmob__bottom">
                    <img src={Carmob} alt="машина" />
                    <span>Вы можете отследить
                        движение вашего груза
                        с помощью gps</span>
                </div>
            </div>
        </div>

    )
}

export default Workmob