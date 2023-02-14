import React from 'react';

import './productCart.scss'

import sausage from '../../ComponentsProduct/ProductImage/sausage.png'

import rating from '../../ComponentsProduct/ProductImage/rating.png'
import HeartFavorite from "../../../../Components/HeartFavorite";

const ProductCart = () => {
    return (
        <>
            <div className="ProductCard">
                <div className="ProductCard__img">
                    <img src={sausage} alt=""/>
                    <HeartFavorite class={'ProductCard__favorite'}/>



                </div>
                <span className="ProductCard__price">77,99 ₽</span>
                <p className="ProductCard__text">Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
                <div className="ProductCard__rating">
                    <img src={rating} alt=""/>
                </div>
                <button className="ProductCard__btn">В корзину</button>
            </div>



        </>
    );
};

export default ProductCart;