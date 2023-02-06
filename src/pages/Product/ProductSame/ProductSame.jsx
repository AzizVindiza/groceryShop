import React from 'react';
import "./productSame.scss"
import Title from "../ComponentsProduct/Title/Title";
import halal from "../ComponentsProduct/ProductImage/sausage.png"
import ProductCart from "../ComponentsProduct/ProductCart/ProductCart";



const ProductSame = () => {
    return (
        <section className='productSame'>
            <div className="container">
                <Title name="С этим товаров покупают"/>
                <div className="wrapper">
                    <ProductCart/>
                    <ProductCart/>
                    <ProductCart/>
                    <ProductCart/>
                </div>
            </div>



        </section>
    );
};

export default ProductSame;