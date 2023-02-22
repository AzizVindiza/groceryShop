import React from 'react';
import "./productSame.scss"
import Title from "../ComponentsProduct/Title/Title";

import {useSelector} from "react-redux";
import Card from "../../../Components/Card/Card";



const ProductSame = () => {

    const {data} = useSelector(store =>store.products)

    return (
        <section className='productSame'>
            <div className="container">
                <Title name="С этим товаров покупают"/>
                <div className="wrapper">

                    {
                        data.filter((item)=>item.status === "sale").slice(0,4).map((item)=>(
                            <Card item={item} key={item.id}/>
                        ))
                    }


                </div>
            </div>



        </section>
    );
};

export default ProductSame;