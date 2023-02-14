import React, {useEffect} from 'react';
import "./product.scss"
import ProductTitle from "./ProductTitle/ProductTitle";
import ProductSame from "./ProductSame/ProductSame";
import ProductReviews from "./ProductReviews/ProductReviews";
import ProductDiscount from "./ProductDiscount/ProductDiscount";
import HeartFavorite from "../../Components/HeartFavorite";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {getAllStatus, setAllProducts} from "../../redux/reducer/products";

const Product = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        axios("http://localhost:8080/products")
            .then(({data})=>{
                dispatch(setAllProducts(data))
                dispatch(getAllStatus(data))
            })
    },[])


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