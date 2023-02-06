import React, {useEffect, useState} from 'react';
import "./shop.scss"
import axios from "axios";
const Shop = () => {
    const  [btn,setBtn] = useState([])
    const  [active,setActive] = useState(1)
    const  [location,setLocation] = useState('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2154.509353257584!2d74.57959760678968!3d42.87577776513461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec81802e15001%3A0x20561cff2c431718!2sBIG%20BRO%20barber%20shop!5e0!3m2!1sru!2skg!4v1675339888860!5m2!1sru!2skg')
    useEffect(() => {
        axios("http://localhost:8080/maps")
            .then(({data}) => setBtn(data))
    },[])

    const handleClick =(item) => {
        setLocation(item.location)
        setActive(item.id)
    }

    return (
        <section className='shop'>
            <div className="container">
                <h2 className="shop__title">Наши магазины</h2>
                <div className="shop__city">
                    {
                        btn.map((item) => (
                            <button onClick={() => handleClick(item)}  key={item.id} className={`shop__btn ${active === item.id?'shop__active' : ''}`}>{item.title}</button>
                        ))
                    }

                </div>
                <div className="shop__map">
                    <iframe className='shop__iframe' src={location} referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    );
};

export default Shop;
