import React from 'react'
import './form.scss'
import InputMask from 'react-input-mask';
import { ReactComponent as Call } from '../../img/call-white.svg'

function Form (props)  {


    return (
        <section className="form">
            <div className="container">
                <div className="title__wrapper">
                    <h2 className="title">Рассчитать <br />
                        стоимость</h2>
                    <span>Заполните форму и наш менеджер свяжется <br />
                        с Вами в ближайшее время.</span>
                </div>
                <form className="form-wrapper">
                    <div className="searchformfld">
                        <input id='candidateName' className='candidateName' name='candidateName' placeholder=' ' type="text" />
                        <label htmlFor='candidateName'>Ваше имя</label>
                    </div>
                    <div className="item2">
                        <InputMask value={props.value} onChange={props.onChange} mask="+7 (***) ***-**-**" maskChar={null} placeholder='+7 (' />
                        
                    </div>
                    <div className="item3">
                        <button type='submit'>Отправить заявку <Call /> </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Form