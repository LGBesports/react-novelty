import React from 'react'
import './footer.scss'
import { ReactComponent as Map } from '../../img/map.svg'
import { ReactComponent as Chat } from '../../img/chat.svg'
function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__left">2022 © “Новелти диагностика и терапия”</div>
                    <div className="footer__right">
                        <div className="footer__loc"> <Map /> Москва, Филевский бульвар, <br /> д. 39, офис 4</div>
                        <div className="footer__contacts">
                            <a className='tel' href="tel:+74951184048">+7 495 118 40 48 </a>
                            <a className='mail' href="mailto:info@novelty.express">info@novelty.express </a>
                        </div>
                        <div className="footer__chat"><Chat /></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer