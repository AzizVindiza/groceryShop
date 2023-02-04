import React from 'react';
import halal from "../ProductImage/halal.png";
import "./productSale.scss"
import blin from "../ProductImage/blin.png";
import favorite from "../ProductImage/favoriteHeart.png";
import rating from "../ProductImage/rating.png";


const ProductSale = () => {
    return (
        <>
            <div className="cart">
                <div className="cart__img">
                    <img src={blin} alt=""/>
                    <img src={favorite} alt="" className="cart__favorite"/>
                    <span className="cart__discount">-50%</span>

                </div>
                <div className="cart__price">
                    <div>
                        <span className="cart__price-new">77,99 ₽</span>
                        <span className="cart__price-text">С картой</span>


                    </div>
                    <div>
                        <span className="cart__price-old">50,50 ₽</span>
                        <span className="cart__price-text" >Обычная</span>
                    </div>
                </div>
                <p className="cart__text">Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
                <div className="cart__rating">
                    <img src={rating} alt=""/>
                </div>
                <button className="cart__btn">В корзину</button>
            </div>

        </>
    );
};

export default ProductSale;