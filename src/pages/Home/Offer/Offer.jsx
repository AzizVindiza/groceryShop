import React from 'react';
import smile from './img/smile.png';
import basket from './img/basket.png';
import "./offer.scss"
const Offer = () => {
    return (
        <section className={'offer'}>
            <div className="container">
                <h2 className="offer__title">
                    Специальные предложения
                </h2>
                <div className="offer__wrapper">
                    <div className="offer__box">
                        <div className="offer__cart">
                            <h3 className="offer__subtitle">Оформите карту «Северяночка»</h3>
                            <p className="offer__txt">И получайте бонусы при покупке в магазинах и на сайте</p>
                        </div>
                        <div className="offer__pic">
                            <img className='offer__img' src={smile} alt=""/>
                        </div>
                    </div>
                    <div className="offer__block">
                        <div className="offer__cart">
                            <h3 className="offer__subtitle">Покупайте <br/> акционные товары</h3>
                            <p className="offer__txt">И получайте вдвое больше <br/> бонусов</p>
                        </div>
                        <div className="offer__pic">
                            <img className='offer__img' src={basket} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;