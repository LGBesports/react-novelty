import React from 'react'
import './partners.scss'
import logo1 from '../../img/logo1.png'
import logo2 from '../../img/logo2.png'
import logo3 from '../../img/logo3.png'
import logo4 from '../../img/logo4.png'
import logo5 from '../../img/logo5.png'
import logo6 from '../../img/logo6.png'
import logo7 from '../../img/logo7.png'
import logo8 from '../../img/logo8.png'

function Partners() {
  return (
    <section className="partners">
        <div className="container">
            <div className="title titleb">С кем работаем</div>
            <div className="partners__logos">
                <img src={logo1} alt="логотип компании" />
                <img src={logo2} alt="логотип компании" />
                <img src={logo3} alt="логотип компании" />
                <img src={logo4} alt="логотип компании" />
                <img src={logo5} alt="логотип компании" />
                <img src={logo6} alt="логотип компании" />
                <img src={logo7} alt="логотип компании" />
                <img src={logo8} alt="логотип компании" />
            </div>
        </div>
    </section>
  )
}

export default Partners