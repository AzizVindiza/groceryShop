import React from 'react';
import "./productDiscount.scss"
import Title from "../ComponentsProduct/Title/Title";
import ProductCart from "../ComponentsProduct/ProductCart/ProductCart";
import ProductSale from "../ComponentsProduct/ProductSale/ProductSale";

const ProductDiscount = () => {
    return (
        <>
            <div className="promotion">
                <div className="promotion__discount">
                    <Title name="Акции"/> <div>Все акции <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z" fill="#606060"/>
                </svg>
                </div>
                </div>
                <div className="promotion__wrapper">

                    <ProductSale/>
                    <ProductSale/>
                    <ProductSale/>
                    <ProductSale/>
                </div>


            </div>

        </>
    );
};

export default ProductDiscount;