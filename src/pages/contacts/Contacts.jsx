import React from 'react'
import './contacts.scss'
import { ReactComponent as Cont1 } from '../../img/cont1.svg'
import { ReactComponent as Cont2 } from '../../img/cont2.svg'
import { ReactComponent as Cont3 } from '../../img/cont3.svg'
import { ReactComponent as Cont4 } from '../../img/cont4.svg'

// import  Map  from '../../comps/Map/Map'

// import { useJsApiLoader } from '@react-google-maps/api';
// const API_KEY = "AIzaSyCXj0elAnbz1FLD9PijlYsFakhyPaXa7vM"
// const defaultCenter = {
//     lat: -3.745,
//     lng: -38.523
// };

function Contacts() {
    // const isLoaded = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: API_KEY
    // })
    return (
        <main className="body contacts">
            <div className="container">
                <div className="title">Как с нами <br />
                    связаться?</div>
                <div className="contacts-wrapper">
                    <div className="contacts__data">
                        <div className="contacts__data-item item1">
                            <div className="contacts__data-item-peace"><a className='phone' href="tel:+74951184048"><Cont1 />+7 495 118 40 48 </a> </div>
                            <div className="contacts__data-item-peace pc"><a className='mailto' href="mailto:info@novelty.express"><Cont2 />info@novelty.express</a> </div>
                        </div>
                        <div className="contacts__data-item item1 mob">
                            
                            <div className="contacts__data-item-peace"><a className='mailto' href="mailto:info@novelty.express"><Cont2 />info@novelty.express</a> </div>
                        </div>
                        <h3 className='mob'>Адрес</h3>
                        <div className="contacts__data-item item2">
                            <h3 className='pc'>Адрес</h3>
                            <div className="contacts__data-item-peace1"><Cont3 /><span>Москва, Филевский <br className='mob' /> бульвар, <br className='pc' />
                                д. 39, офис 4</span>  </div>
                        </div>
                        <h3 className='mob'>Режим работы</h3>
                        <div className="contacts__data-item item2">
                            <h3 className='pc'>Режим работы</h3>
                            <div className="contacts__data-item-peace1"><Cont4 /><span>Приём заказов на сайте: <b>24/7</b> <br />
                                Офис и Склад: <b>8:00-18:30</b></span></div>
                        </div>
                    </div>
                    <div className="contacts__map">
                        {/* {isLoaded ? <Map center={defaultCenter} /> : <h2>Загрузка...</h2>} */}
                        <iframe src="http://p.nexoteam.site/" frameBorder="0"></iframe>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contacts