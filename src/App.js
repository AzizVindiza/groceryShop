import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import { ChakraProvider,  } from '@chakra-ui/react'
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Product from "./pages/Product/Product";
import Favorite from "./pages/Favorite/Favorite";
import Orders from "./pages/Orders/Orders";
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/About/About";
import Vacancies from "./pages/Vacancies/Vacancies";
import Cart from "./pages/Cart/Cart";
import Search from "./pages/Search/Search";

import "./scss/style.scss"
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {getAllStatus, setAllProducts} from "./redux/reducer/products";
const App = () => {
    const {filter} = useSelector((state)=>state.products)
    const dispatch = useDispatch()
    useEffect(()=>{
        axios("http://localhost:8080/products")
            .then(({data})=>{
                dispatch(setAllProducts(data))
                dispatch(getAllStatus(data))
            })
    },[]);
    return (
        <ChakraProvider>
       <Routes>
           <Route path={"/"} element={<Layout/>}>
               <Route path={""} element={<Home/>}/>
               {/*Айбек*/}
               <Route path={"category"} element={<Category/>}/>
               <Route path={"category/:id"} element={<Favorite/>}/>
               {/*Арсен*/}
               <Route path={"product"} element={<Product/>}/>
               {/*Расул*/}
               <Route path={"favorite"} element={<Favorite/>}/>
               {/*Атайбек*/}
               <Route path={"orders"} element={<Orders/>}/>
               {/*Султан*/}
               <Route path={"contacts"} element={<Contacts/>}/>
               <Route path={"about"} element={<About/>}/>
               <Route path={"vacancies"} element={<Vacancies/>}/>
               {/*Милана*/}
               <Route path={"Cart"} element={<Cart/>}/>
               {/*Адилет*/}
               <Route path={"search"} element={<Search/>}/>
               {/*Руслан*/}
           </Route>
       </Routes>
       </ChakraProvider>
    );
};

export default App;