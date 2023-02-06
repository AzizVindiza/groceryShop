import React, {useState} from 'react';
import "../Category.scss"

const Card = ({image,text,long}) => {
    // let [active, setActive] = useState(false);
    //
    // let toggleClass = () => {
    //     setActive(!active);
    // }
    return (
        <>
            <div className={`card`}>
                <div className={`card__zIndex`}/>
                <img className="card__img" src={image} alt=""/>
                <p className="card__text">{text}</p>
            </div>
        </>
    );
};

export default Card;