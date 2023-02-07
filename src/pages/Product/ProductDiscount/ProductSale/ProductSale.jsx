import React, {useEffect, useState} from 'react';

import "./productSale.scss"

import rating from "../../ComponentsProduct/ProductImage/rating.png";
import axios from "axios";
import HeartFavorite from "../../../../Components/HeartFavorite";


const ProductSale = () => {
    const [discount,setDiscount] = useState([])

    useEffect(() => {
        axios("http://localhost:8080/products")
            .then(({data}) => setDiscount(data))
            .catch((err) => console.log(err) )
    },[])
    return (
        <>
            {
                discount.filter((item)=> item.discount === true).map((el) =>(

                    <div className="cart" key={el.id}>
                        <div className="cart__img">
                            <img src={`${el.img}`} alt=""/>
                            <HeartFavorite/>
                            <span className="cart__discount">{`${el.discountPercent}%`}</span>

                        </div>
                        <div className="cart__price">
                            <div className="cart__price-left">
                                <span className="cart__price-new">{`${el.price}`}</span>
                                <span className="cart__price-text">С картой</span>


                            </div>
                            <div className="cart__price-right">
                                <span className="cart__price-old">{`${el.price}`}</span>
                                <span className="cart__price-text">Обычная</span>
                            </div>
                        </div>
                        <p className="cart__text">{`${el.name}`}</p>
                        <div className="cart__rating">
                            <img src={rating} alt=""/>
                        </div>
                        <button className="cart__btn">В корзину</button>
                    </div>
                    )

                )
            }


        </>
    );
};

export default ProductSale;