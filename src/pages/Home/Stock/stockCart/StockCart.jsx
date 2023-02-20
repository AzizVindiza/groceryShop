import React, {useEffect, useState} from 'react';
import "./stockCart.scss"
import axios from "axios";
import Skeleton from "../../New/CartNew/Sceleton/Skeleton";
import Card from "../../../../Components/Card/Card";
const StockCart = () => {
    const [discount,setDiscount] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(() => {
       axios("http://localhost:8080/products")
           .then(({data}) => setDiscount(data))
           .catch((err) => console.log(err))
        setTimeout(() =>{
            setLoading(true)
        },1000)

    },[])
    return (
        <div className="stockCart">
            {
                loading ? discount.filter((item) => item.discount === true).map((item) => (
                     <Card key={item.id} item={item}/>
                )):  [... new Array(4)].map((_,id) => <Skeleton/> )
            }



        </div>
    );
};

export default StockCart;