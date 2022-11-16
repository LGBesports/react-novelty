import React from 'react';
import './home.scss';
import cargoman from '../../img/cargoman.png';
import Advantages from '../../comps/Advantages/Advantages';
import Whywe from '../../comps/Whywe/Whywe';
import Work from '../../comps/Work/Work';
import Partners from '../../comps/Partners/Partners';
import Form from '../../comps/Form/Form';
import Popup from '../../comps/Popup/Popup';
import { useState } from 'react';
import { ReactComponent as CallB } from '../../img/call-blue.svg'
import Workmob from '../../comps/Workmob/Workmob';
import { ReactComponent as Express } from '../../img/express.svg'

const Home = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <main className="body">
            <section className="cargo">
                <div className="container">
                    <div className="cargo-wrapper">
                        <div className="cargo__text">
                            <h1>Экспресс <br />
                                <span>доставка</span> вакцин
                                и биопрепаратов</h1>
                            <h2>Доставка день в день после
                                оставления заявки</h2>

                            <button onClick={() => setButtonPopup(true)} className='call-white'>
                                Оставить заявку <CallB />
                            </button>
                        </div>
                        <div className="cargo__img">
                            <Express />
                            <img src={cargoman} alt="Сотрудник службы доставки" />
                        </div>
                    </div>
                </div>
            </section>
            <Advantages name={`Что мы\nпредлагаем?`} />
            <Whywe />
            <Work  />
            <Workmob  />
            <Partners />
            <Form />
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>

            </Popup>
        </main>



    )
}

export default Home;