import React from 'react';
import "./product.scss"
import ProductTitle from "./ProductTitle/ProductTitle";
import ProductSame from "./ProductSame/ProductSame";
import ProductReviews from "./ProductReviews/ProductReviews";
import ProductDiscount from "./ProductDiscount/ProductDiscount";

const Product = () => {
    return (
        <div className="container">
            <ProductTitle/>
            <ProductSame/>
            <ProductReviews/>
            <ProductDiscount/>
        </div>
    );
};

export default Product;