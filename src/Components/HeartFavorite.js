import React, {useState} from 'react';
import Heart from "react-heart"
import {useDispatch, useSelector} from "react-redux";
import {setFavorite} from "../redux/reducer/favorite";

const HeartFavorite = (props) => {
    const dispatch = useDispatch()
    const {data} = useSelector(state=>state.favorite)
    return (
        <div  className={props.class} style={{width:"1.4rem"}}>
            <Heart onClick={()=>{dispatch(setFavorite(props.item))}} isActive={data.findIndex((item)=>item.id === props.item?.id) > -1}/>
        </div>
    );
};

export default HeartFavorite;