import React from 'react'
import './search.scss'
import { ReactComponent as Burgerclose } from '../../img/burger-close.svg'


function Search(props) {
    
    return (props.trigger) ? (
        <div className='burger'>
            <button onClick={() => props.setTrigger(false)} className='burger-close'><Burgerclose /></button>
            <div className="burger__body">
                <input className='searchinput' type="search" />

                {props.children}
            </div>
            
            
        </div>
    ) : "";
}

export default Search