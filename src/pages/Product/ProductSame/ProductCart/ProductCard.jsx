import React from 'react';

import './productCard.scss'

import sausage from '../../ComponentsProduct/ProductImage/sausage.png'

import rating from '../../ComponentsProduct/ProductImage/rating.png'
import HeartFavorite from "../../../../Components/HeartFavorite";
import {useSelector} from "react-redux";
import Card from "../../../../Components/Card/Card";

const ProductCard = () => {

    const {data} =  useSelector(state => state.products)

    return (
        <>
            {
                data.filter((item)=>item.status ==='sale').slice(0,4).map((item)=>(
                    <div className="ProductCard">
                        <Card key={item.id} item={item}/>
                    </div>
                ))
            }


            {/*<div className="ProductCard">*/}
            {/*    */}
            {/*    <div className="ProductCard__img">*/}
            {/*        <img src={sausage} alt=""/>*/}
            {/*        <HeartFavorite class={'ProductCard__favorite'}/>*/}



            {/*    </div>*/}
            {/*    <span className="ProductCard__price">77,99 ₽</span>*/}
            {/*    <p className="ProductCard__text">Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>*/}
            {/*    <div className="ProductCard__rating">*/}
            {/*        <img src={rating} alt=""/>*/}
            {/*    </div>*/}
            {/*    <button className="ProductCard__btn">В корзину</button>*/}
            {/*</div>*/}



        </>
    );
};

export default ProductCard;