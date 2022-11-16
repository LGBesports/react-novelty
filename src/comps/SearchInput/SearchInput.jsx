import React from 'react'
import './searchinput.scss'



function SearchInput(props) {

    return (props.trigger) ? (
        <div className="searchinput-wrapper">
            <input placeholder='Поиск...' className='searchinput2' type="search" />
            {props.children}
        </div>


    ) : "";
}

export default SearchInput