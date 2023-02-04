import React from 'react';
import "./productSame.scss"
import Title from "../ComponentsProduct/Title/Title";
import halal from "../ComponentsProduct/ProductImage/halal.png"
import ProductCart from "../ComponentsProduct/ProductCart/ProductCart";



const ProductSame = () => {
    return (
        <>
            <Title name="С этим товаров покупают"/>
            <div className="wrapper">
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
            </div>


        </>
    );
};

export default ProductSame;