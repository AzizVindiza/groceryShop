import React, {useState} from 'react';
import "./user.scss"
import avatar from "./avatar.png"
import {Link} from "react-router-dom";


const User = () => {
    const [active,setActive] = useState(false)
    return (
        <div className="user">
            <div className="user__avatar">
                <img className="user__img" src={avatar} alt="avatar"/>
            </div>
            <h2 className="user__name">Алексей</h2>
            <button type="button" className="user__dropArrow">
                <svg onClick={()=>{setActive(!active)}} style={{transform: active ? "rotate(180deg)" : ""}} width="14" height="8" viewBox="0 0 14 8"  fill="#414141" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7 6.29289L12.6464 0.646447C12.8417 0.451184 13.1583 0.451184 13.3536 0.646447C13.5488 0.841709 13.5488 1.15829 13.3536 1.35355L7.35355 7.35355C7.15829 7.54882 6.84171 7.54882 6.64645 7.35355L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"/>
                </svg>
            </button>
            <ul style={{display:active ? "flex" : "none"}} className="user__content">
                <Link to={""} className="user__link"><li className="user__li">Мой профиль</li></Link>
                <Link to={""} className="user__link"><li className="user__li">Выйти</li></Link>
            </ul>
        </div>
    );
};

export default User;