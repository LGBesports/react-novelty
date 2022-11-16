import React from 'react';
import './advantages.scss';
import { ReactComponent as Extra1 } from '../../img/extra1.svg'
import { ReactComponent as Extra2 } from '../../img/extra2.svg'
const Advantages = (props) => {
    return (
        <section className="advantages">
            <div className="container">
                <div className="title">{props.name}</div>
                <div className="advantages__list">
                    <div className="advantages__item advantage1">
                        <div className="extrabox">
                            <Extra1 />
                            </div>
                        <div className="imgbox">
                            {/* <img src={adv1} alt="" /> */}
                        </div>
                        <div className="textbox">
                            Перевозка <br />
                            <span>опасных грузов</span>
                        </div>
                    </div>
                    <div className="advantages__item advantage2">
                    <div className="extrabox">
                            <Extra2 />
                            </div>
                        <div className="imgbox">
                            {/* <img src={adv2} alt="" /> */}
                        </div>
                        <div className="textbox">
                            Перевозка радиофармпрепаратов <br />
                            <span>7 класса опасности</span>
                        </div>
                    </div>
                    <div className="advantages__item advantage3">
                        <div className="imgbox">
                            {/* <img src={adv3} alt="" /> */}
                        </div>
                        <div className="textbox">
                            Перевозка медикаментов <br />
                            <span>с температурным
                                режимом</span>
                        </div>
                    </div>
                    <div className="right">
                    <div className="advantages__item advantage4">
                        <div className="imgbox">
                            {/* <img src={adv4} alt="" /> */}
                        </div>
                        <div className="textbox">

                            <span>Криологистика</span>
                        </div>
                    </div>
                    <div className="advantages__item advantage5">
                        <div className="imgbox">
                            {/* <img src={adv5} alt="" /> */}
                        </div>
                        <div className="textbox">
                            Транспортировка <br />
                            <span>биоматериалов</span>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Advantages;