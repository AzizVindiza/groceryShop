import {configureStore} from "@reduxjs/toolkit";
import products from "./reducer/products";
import users from "./reducer/users";
import favorite from "./reducer/favorite";
import cart from "./reducer/cart";
import oneProduct from "./reducer/oneProduct";




let store = configureStore({
    reducer:{
        products: products,
        users: users,
        favorite: favorite,
        cart,
        oneProduct
    }
})

export default store