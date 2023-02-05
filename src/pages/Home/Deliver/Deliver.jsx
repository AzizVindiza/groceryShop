import React from 'react';
import "./deliver.scss"
import product from './img/podarochnaya-korzina-s-produktami-700x700.jpg'
const Deliver = () => {

    return (
        <section className='deliver'>
            <div className="container">
                <div className="deliver__wrapper">
                    <div className="deliver__basket">
                        <img className='deliver__picture' src={product} alt=""/>
                    </div>
                    <h2 className="deliver__title">Доставка бесплатно от 1000 ₽</h2>
                </div>
            </div>
        </section>
    );
};

export default Deliver;