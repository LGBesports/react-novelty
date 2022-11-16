import React from 'react';
import './Buttons.scss'
import { ReactComponent as CallB } from '../../img/call-blue.svg'

const Wbutton = () => {
    return (
        <button className='call-white'>
            Оставить заявку <CallB />
        </button>
    )
}

export default Wbutton;