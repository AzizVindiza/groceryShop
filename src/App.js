import React from "react";
import {Route, Routes} from "react-router-dom";
import {data} from "./utils/data";
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
const App = () => {
    return (
       <Routes>
           <Route path={"/"} element={<Layout/>}>
               <Route path={""} element={<Home/>}/>
               {/*Айбек*/}
               <Route path={"category"} element={<Category/>}/>
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
    );
};

export default App;