import React from 'react';
import image from './image 5 (2).png'
import "./newsCart.scss"
const NewsCart = () => {
    return (
        <div className={'newsCart'}>
            <div className="newsCart__block">
                <div className="newsCart__logo">
                    <img src={image} alt=""/>
                </div>
                <h4 className="newsCart__subtitle">05.03.2021</h4>
                <p className="newsCart__txt">Режим использования масок и <br/> перчаток на территории магазинов</p>
                <p className="newsCart__text">Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.</p>
                <button className='newsCart__btn'>Подробнее</button>
            </div>
        </div>
    );
};

export default NewsCart;