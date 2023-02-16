import React from 'react';
import logo from "./header__logo.svg"
import "./Header.scss"
import {Link} from "react-router-dom";
import Catalog from "./Catolog/Catalog";
import Search from "./Search/Search";
import User from "./User/User";
import {useDispatch, useSelector} from "react-redux";
import {getSearch} from "../../redux/reducer/products";


const Header = () => {
    const {filter} = useSelector((state)=>state.products)
    const dispatch = useDispatch()
    return (
        <header className="header">
            <div className="container">
                <h1 className="header__logo" onClick={()=>dispatch(getSearch(""))}>
                    <Link to={"/"}><img src={logo} alt="Северяночка"/></Link>
                </h1>
                <Catalog/>
                <Search/>
                <nav className="header__nav nav">
                    <Link to={"favorite"} className="nav__link">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M13.2046 4.25644C14.3299 3.13067 15.8564 2.49817 17.4482 2.49817C19.0399 2.49817 20.5664 3.13063 21.6916 4.25636C22.8174 5.38164 23.45 6.90829 23.45 8.49999C23.45 10.0917 22.8175 11.6183 21.6917 12.7435C21.6917 12.7436 21.6917 12.7435 21.6917 12.7435L12.8517 21.5835C12.6565 21.7788 12.3399 21.7788 12.1446 21.5835L3.30461 12.7435C0.960963 10.3999 0.960963 6.60009 3.30461 4.25644C5.64826 1.91279 9.44807 1.91279 11.7917 4.25644L12.4982 4.96289L13.2046 4.25644C13.2046 4.25641 13.2046 4.25647 13.2046 4.25644ZM17.4482 3.49817C16.1217 3.49817 14.8496 4.02528 13.9118 4.96346L12.8517 6.02355C12.758 6.11732 12.6308 6.16999 12.4982 6.16999C12.3656 6.16999 12.2384 6.11732 12.1446 6.02355L11.0846 4.96355C9.13149 3.01042 5.96484 3.01042 4.01172 4.96355C2.05859 6.91667 2.05859 10.0833 4.01172 12.0364L12.4982 20.5229L20.9846 12.0364C21.9228 11.0987 22.45 9.82648 22.45 8.49999C22.45 7.17351 21.9229 5.90138 20.9847 4.96363C20.0469 4.02544 18.7747 3.49817 17.4482 3.49817Z"
                                  fill="#414141"/>
                        </svg>
                        Избранное
                    </Link>
                    <Link to={""} className="nav__link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M11.3325 1.89776C11.3324 1.89785 11.3327 1.89767 11.3325 1.89776L3.33366 5.89721L3.33255 5.89776C2.82288 6.15102 2.50045 6.67089 2.50005 7.24V16.7635C2.49608 17.3334 2.81541 17.8563 3.32416 18.113C3.32387 18.1129 3.32445 18.1132 3.32416 18.113L11.3237 22.1128C11.7462 22.3242 12.2438 22.3243 12.6663 22.1129L20.6664 18.1128L20.6675 18.1122C21.1773 17.8589 21.4997 17.3389 21.5 16.7697V7.24026C21.4997 6.67105 21.1773 6.15106 20.6675 5.89776L20.6664 5.89721L12.6675 1.89776C12.6674 1.89767 12.6677 1.89786 12.6675 1.89776C12.2474 1.6892 11.7527 1.68919 11.3325 1.89776ZM10.8875 1.00223C11.5883 0.654 12.4118 0.654 13.1125 1.00223L13.1137 1.00278L21.1125 5.00223C21.1124 5.00215 21.1127 5.00231 21.1125 5.00223C21.9618 5.42448 22.4995 6.29123 22.5 7.23973V16.77C22.4995 17.7184 21.9624 18.5852 21.1132 19.0074C21.113 19.0075 21.1134 19.0073 21.1132 19.0074L13.1138 23.0071C13.1138 23.0072 13.1138 23.0071 13.1138 23.0071C12.4097 23.3594 11.5806 23.3595 10.8764 23.0072C10.8764 23.0072 10.8765 23.0072 10.8764 23.0072L2.87644 19.0072L2.87506 19.0065C2.02685 18.5791 1.49413 17.708 1.50005 16.7584V7.24C1.50055 6.29154 2.03772 5.4248 2.88695 5.00253C2.88675 5.00263 2.88715 5.00243 2.88695 5.00253L10.8864 1.00278L10.8875 1.00223Z"
                                  fill="#414141"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M1.87321 5.93638C1.9967 5.6894 2.29704 5.58928 2.54403 5.71278L12.0004 10.441L21.4568 5.71278C21.7038 5.58928 22.0041 5.6894 22.1276 5.93638C22.2511 6.18337 22.151 6.48371 21.904 6.6072L12.224 11.4472C12.0833 11.5176 11.9176 11.5176 11.7768 11.4472L2.09682 6.6072C1.84983 6.48371 1.74971 6.18337 1.87321 5.93638Z"
                                  fill="#414141"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M12 10.5C12.2761 10.5 12.5 10.7239 12.5 11V22.76C12.5 23.0361 12.2761 23.26 12 23.26C11.7239 23.26 11.5 23.0361 11.5 22.76V11C11.5 10.7239 11.7239 10.5 12 10.5Z"
                                  fill="#414141"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M6.5529 3.27638C6.67639 3.02939 6.97673 2.92928 7.22372 3.05277L17.2237 8.05277C17.4707 8.17627 17.5708 8.4766 17.4473 8.72359C17.3238 8.97058 17.0235 9.0707 16.7765 8.9472L6.7765 3.9472C6.52951 3.82371 6.4294 3.52337 6.5529 3.27638Z"
                                  fill="#414141"/>
                        </svg>

                        Заказы</Link>
                    <Link to={""} className="nav__link">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M6 21C6 19.6193 7.11929 18.5 8.5 18.5C9.88071 18.5 11 19.6193 11 21C11 22.3807 9.88071 23.5 8.5 23.5C7.11929 23.5 6 22.3807 6 21ZM8.5 19.5C7.67157 19.5 7 20.1716 7 21C7 21.8284 7.67157 22.5 8.5 22.5C9.32843 22.5 10 21.8284 10 21C10 20.1716 9.32843 19.5 8.5 19.5Z"
                                  fill="#414141"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M18 21C18 19.6193 19.1193 18.5 20.5 18.5C21.8807 18.5 23 19.6193 23 21C23 22.3807 21.8807 23.5 20.5 23.5C19.1193 23.5 18 22.3807 18 21ZM20.5 19.5C19.6716 19.5 19 20.1716 19 21C19 21.8284 19.6716 22.5 20.5 22.5C21.3284 22.5 22 21.8284 22 21C22 20.1716 21.3284 19.5 20.5 19.5Z"
                                  fill="#414141"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M1.5 0.5C1.22386 0.5 1 0.723858 1 1C1 1.27614 1.22386 1.5 1.5 1.5H5.08051C5.83783 5.79147 6.60333 10.0643 7.24931 14.3709C7.43288 15.5947 8.48416 16.5 9.72165 16.5H19.8597C21.0514 16.5 22.0774 15.6588 22.3111 14.4903L23.7503 7.29417C23.936 6.36599 23.226 5.5 22.2795 5.5H7.66046C7.3575 5.5 7.07797 5.58901 6.84436 5.74093L5.99239 0.913107C5.95023 0.674179 5.74262 0.5 5.5 0.5H1.5ZM7.166 7.07417C7.12065 6.77187 7.35478 6.5 7.66046 6.5H22.2795C22.595 6.5 22.8316 6.78866 22.7698 7.09806L21.3305 14.2942C21.1903 14.9953 20.5747 15.5 19.8597 15.5H9.72165C8.97916 15.5 8.34839 14.9568 8.23825 14.2225L7.166 7.07417Z"
                                  fill="#414141"/>
                        </svg>
                        Корзина</Link>

                </nav>
                <User/>
            </div>
        </header>
    );
};

export default Header;