import React from 'react';
import './header.scss'
import '../Buttons/Buttons.scss'
import { ReactComponent as Logo } from '../../img/logo.svg'
import { ReactComponent as Burgermob } from '../../img/burgermob.svg'
import { ReactComponent as Searchi } from '../../img/search.svg'
import { ReactComponent as Lk } from '../../img/lk.svg'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Call } from '../../img/call-white.svg'
import { ReactComponent as Burger1200 } from '../../img/burger1200.svg'
import { useState } from 'react';
import Popup from '../../comps/Popup/Popup';
import '../Buttons/Buttons.scss'
import Burger from '../Burger/Burger';
import Search from '../Search/Search'
import SearchInput from '../SearchInput/SearchInput'
const Header = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [burgerPop, setBurgerPopup] = useState(false);
    const [searchPop, setSearchPop] = useState(false);
    const [searchInput, setSearchInput] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };
    return (
        <header className='header'>
            <div className='container'>
                <div className="header-wrapper">
                    <button onClick={() => setBurgerPopup(true)}><Burgermob className='burgermob' /></button>
                    <NavLink to='/' activeclassname='active'><Logo className='logo' /></NavLink>
                    <nav>
                        <button className='burger1200'><Burger1200 /><ul className='menu1200'>
                            <li><NavLink to='/about'>О нас</NavLink> </li>
                            <li><NavLink to='/offer'>Что мы предлагаем</NavLink></li>
                            {/* <li><NavLink to='/sklad'>Склад</NavLink></li> */}
                            <li><NavLink to='/contacts'>Контакты</NavLink></li>
                        </ul></button>
                        <ul className='menu1200'>
                            <li><NavLink to='/about'>О нас</NavLink> </li>
                            <li><NavLink to='/offer'>Что мы предлагаем</NavLink></li>
                            {/* <li><NavLink to='/sklad'>Склад</NavLink></li> */}
                            <li><NavLink to='/contacts'>Контакты</NavLink></li>
                        </ul>
                    </nav>
                    <div className="search">
                        <SearchInput trigger={searchInput} setTrigger={setSearchInput}></SearchInput>
                        <button className='mob' onClick={() => setSearchPop(true)}><Searchi /></button>
                        <div className='pc closedbutton' id={isActive ? 'open' : ''} onClick={handleClick}> <button onClick={() => setSearchInput(true)} className='opened'><Searchi /></button><button onClick={() => setSearchInput(false)} className='closed'><Searchi /></button> </div>
                    </div>
                    <div className="tel"><a href="tel:+74951184048" className="tel">+7 495 118 40 48</a></div>
                    <a href="/" className="lk">
                        <Lk />Личный кабинет
                    </a>

                    <button onClick={() => setButtonPopup(true)} className='call-blue'>
                        Оставить заявку <Call />
                    </button>
                </div>

            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
            <Burger trigger={burgerPop} setTrigger={setBurgerPopup}></Burger>
            <Search trigger={searchPop} setTrigger={setSearchPop}></Search>
        </header>
    )

}

export default Header;
