import React from 'react';

import './productCart.scss'

import halal from '../ProductImage/halal.png'
import favorite from '../ProductImage/favoriteHeart.png'
import rating from '../ProductImage/rating.png'

const ProductCart = () => {
    return (
        <>
            <div className="cart">
                <div className="cart__img">
                    <img src={halal} alt=""/>
                    <img src={favorite} alt="" className="cart__favorite"/>


                </div>
                <span className="cart__price">77,99 ₽</span>
                <p className="cart__text">Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
                <div className="cart__rating">
                    <img src={rating} alt=""/>
                </div>
                <button className="cart__btn">В корзину</button>
            </div>



        </>
    );
};

export default ProductCart;