import React from 'react';

import './productCart.scss'

import sausage from '../../ComponentsProduct/ProductImage/sausage.png'
import favorite from '../../ComponentsProduct/ProductImage/favoriteHeart.png'
import rating from '../../ComponentsProduct/ProductImage/rating.png'
import HeartFavorite from "../../../../Components/HeartFavorite";

const ProductCart = () => {
    return (
        <>
            <div className="cart">
                <div className="cart__img">
                    <img src={sausage} alt=""/>
                    <HeartFavorite/>



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