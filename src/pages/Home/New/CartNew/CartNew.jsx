import React, {useEffect, useState} from 'react';
import Skeleton from "./Sceleton/Skeleton"
import "./cartNew.scss"
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getAllStatus} from "../../../../redux/reducer/products";
import Card from "../../../../Components/Card/Card";
const CartNew = () => {
    const {data} = useSelector(state => state.products)

    const {listOfAllStatus} = useSelector(state => state.products)
    return (
        <div  className={'addCart'}>
            {data.filter((item,idx) => item.status === 'new').map((item) =>(
                    <Card key={item.id} item={item}/>
                )
                )
            }

        </div>
    );
};

export default CartNew;