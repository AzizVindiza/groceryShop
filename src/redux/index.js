import {configureStore} from "@reduxjs/toolkit";
import products from "./reducer/products";
import users from "./reducer/users";



let store = configureStore({
    reducer:{
        products: products,
        users: users,
    }
})

export default store