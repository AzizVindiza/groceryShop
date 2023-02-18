import React, {useEffect} from 'react';
import './favorite.scss';
import img from "./img/image.jpg";
import StarRating from '../../Components/StarRating';
import {Link, useLocation} from "react-router-dom";
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
} from '@chakra-ui/react';
import {Switch, FormLabel} from '@chakra-ui/react';
import {useDispatch, useSelector} from "react-redux";
import Card from "../../Components/Card/Card";
import {setInStock, setStatus} from "../../redux/reducer/favorite";
import {setCategory} from "../../redux/reducer/products";

const Favorite = () => {

    const {data, filter} = useSelector(state => state.favorite)
    const {data: dataP, filter: filterP} = useSelector(state => state.products)
    const dispatch = useDispatch()
    const location = useLocation()
    useEffect(() => {
        if (location.pathname !== "/favorite") {
            return dispatch(setCategory(location.pathname.split(`/`).at(-1)))
        }


    }, [])
    return (
        <>

        </>
    );
};

export default Favorite;