import React, {useEffect, useState} from 'react';

import "./productSale.scss"

import rating from "../../ComponentsProduct/ProductImage/rating.png";
import axios from "axios";
import HeartFavorite from "../../../../Components/HeartFavorite";
import {useSelector} from "react-redux";
import Card from "../../../../Components/Card/Card";


const ProductSale = () => {
    const {data} = useSelector(state => state.products)

    return (
        <>
            {
                data.filter((item)=> item.discount === true).slice(0,4).map((el) =>(

                    <div className="SaleCard">
                        <Card key={el.id} item={el}/>
                    </div>



                    // <div className="SaleCard" key={el.id}>
                    //     <div className="ProductCard__img">
                    //         <img src={`${el.img}`} alt=""/>
                    //         <HeartFavorite class={"SaleCard__favorite"}/>
                    //         <span className="SaleCard__discount">{`${el.discountPercent}%`}</span>
                    //
                    //     </div>
                    //     <div className="SaleCard__price">
                    //         <div className="SaleCard__price-left">
                    //             <span className="SaleCard__price-new">{`${el.price} ₽`}</span>
                    //             <span className="SaleCard__price-text">С картой</span>
                    //
                    //
                    //         </div>
                    //         <div className="SaleCard__price-right">
                    //             <span className="SaleCard__price-old">{`${(Number(el.price) - (Number(el.price) / 100 * el.discountPercent).toFixed(2))} ₽`}</span>
                    //             <span className="SaleCard__price-text">Обычная</span>
                    //         </div>
                    //     </div>
                    //     <p className="SaleCard__text">{`${el.name}`}</p>
                    //     <div className="SaleCard__rating">
                    //         <img src={rating} alt=""/>
                    //     </div>
                    //     <button className="SaleCard__btn">В корзину</button>
                    // </div>

                    )

                )
            }


        </>
    );
};

export default ProductSale;