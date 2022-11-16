import React from 'react';
import './Buttons.scss'
import { ReactComponent as Call } from '../../img/call-white.svg'

const Bbutton = () => {
    return (
        <button className='call-blue'>
            Оставить заявку <Call />
        </button>
    )
}

export default Bbutton;