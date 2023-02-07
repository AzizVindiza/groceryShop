import React from 'react';
import "./product.scss"
import ProductTitle from "./ProductTitle/ProductTitle";
import ProductSame from "./ProductSame/ProductSame";
import ProductReviews from "./ProductReviews/ProductReviews";
import ProductDiscount from "./ProductDiscount/ProductDiscount";
import HeartFavorite from "../../Components/HeartFavorite";

const Product = () => {
    return (
        <>


            <ProductTitle/>
            <ProductSame/>
            <ProductReviews/>
            <ProductDiscount/>

        </>
    );
};

export default Product;