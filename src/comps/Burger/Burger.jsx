import React from 'react'
import './burger.scss'
import { ReactComponent as Burgerclose } from '../../img/burger-close.svg'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Joinlk } from '../../img/joinlk.svg'
import { ReactComponent as Call } from '../../img/call-white.svg'
import { ReactComponent as Burgertel } from '../../img/burger-tel.svg'
import { useState } from 'react';
import Popup from '../Popup/Popup'

function Burger(props) {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (props.trigger) ? (
        <div className='burger'>
            <button onClick={() => props.setTrigger(false)} className='burger-close'><Burgerclose /></button>
            <div className="burger__body">
                <ul className='burger-menu'>
                    <li><NavLink activeclassname='active' onClick={() => props.setTrigger(false)} to='/about'>О нас</NavLink> </li>
                    <li><NavLink activeclassname='active' onClick={() => props.setTrigger(false)} to='/offer'>Что мы предлагаем</NavLink></li>
                    <li><NavLink activeclassname='active' onClick={() => props.setTrigger(false)} to='/sklad'>Склад</NavLink></li>
                    <li><NavLink activeclassname='active' onClick={() => props.setTrigger(false)} to='/contacts'>Контакты</NavLink></li>
                </ul>
                <div className="burger__joinlk"><a href=""><Joinlk />Войти в Личный кабинет</a></div>

                {props.children}
            </div>
            <div className="burger__bottom">
                <div className="burger__bottom-tel">
                    <a href="tel:+74951184048"><Burgertel />+7 495 118 40 48 </a>
                </div>
                <button onClick={() => setButtonPopup(true)} className='call-blue'>
                        Оставить заявку <Call />
                    </button>
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
        </div>
    ) : "";
}

export default Burger