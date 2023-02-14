import React, {useEffect} from 'react';
import Deliver from "./Deliver/Deliver";
import Stock from "./Stock/Stock";
import New from "./New/New";
import Popular from "./Popular/Popular";
import Offer from "./Offer/Offer";
import Shop from "./Shop/Shop";
import News from "./News/News";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getAllStatus, setAllProducts} from "../../redux/reducer/products";

const Home = () => {
    const {filter} = useSelector((state)=>state.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        axios("http://localhost:8080/products")
            .then(({data})=>{
                dispatch(setAllProducts(data))
                dispatch(getAllStatus(data))
            })
    },[])
    if(filter.name.length !== 0){
        navigate('/search')
    }

    return (
        <>
            <Deliver/>
            <Stock/>
            <New/>
            <Popular/>
            <Offer/>
            <Shop/>
            <News/>
        </>
    );
};

export default Home;