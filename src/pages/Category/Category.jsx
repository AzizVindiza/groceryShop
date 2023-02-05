import React, {useEffect, useState} from 'react';
import "./Category.scss"
import Card from "./Card/Card";
import {Link} from "react-router-dom";
import axios from "axios";
import data from "../../utils/data";

const Category = () => {
    const [arrCategory,setArrCategory] = useState([])
    useEffect(()=>{
        axios("http://localhost:8080/list-of-categories")
            .then(({data})=> setArrCategory(data))

    },[])
    return (
        <>
            <section className="categorY">
                <div className="container">
                    <div className="category">
                        <div className="category__menu">
                            <Link className="category__menu__a" to={""}>Главная</Link>
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355L1.35355 13.3536C1.15829 13.5488 0.841709 13.5488 0.646447 13.3536C0.451184 13.1583 0.451184 12.8417 0.646447 12.6464L6.29289 7L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#414141"/>
                            </svg>
                            <a className="category__menu__a" href="http://localhost:3000/">Каталог</a>
                        </div>
                        <h2 className="category__catalog">Каталог</h2>
                        <div className="card__all">
                            {
                             arrCategory.map(item =>(
                                 <Card image={item.img} text={item.name}/>
                             ))
                            }
                            arr.filter().map
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Category;