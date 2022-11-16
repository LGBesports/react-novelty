import React from 'react'
import './popup.scss'
import '../Form/form.scss'
import InputMask from 'react-input-mask';
import { ReactComponent as Call } from '../../img/call-white.svg'

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div onClick={() => props.setTrigger(false)} className="popup__bg">
            </div>
            <div className="popup__window">
                <section className="form pop">
                <button className='pop-close' onClick={() => props.setTrigger(false)}></button>
                    <div className="container">
                        <div className="title__wrapper">
                            <h2 className="title pop">Рассчитать <br />
                                стоимость</h2>
                                
                        </div>
                        <form className="form-wrapper pop">
                            <div className="searchformfld pop">
                                <input id='candidateName' className='candidateName' name='candidateName' placeholder=' ' type="text" />
                                <label htmlFor='candidateName'>Ваше имя</label>
                            </div>
                            <div className="item2 pop">
                                <InputMask value={props.value} onChange={props.onChange} mask="+7 (***) ***-**-**" maskChar={null} placeholder='+7 (' />

                            </div>
                            <div className="item3 pop">
                                <button type='submit'>Отправить заявку <Call /> </button>
                            </div>
                        </form>
                    </div>
                </section>
                
                {props.children}
            </div>

        </div>

    ) : "";
}

export default Popup