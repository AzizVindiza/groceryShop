import React from 'react';
import "./productTitle.scss";
import "../ComponentsProduct/Title/Title"

import small_cat from "../ComponentsProduct/ProductImage/small_cat.png"
import cat from "../ComponentsProduct/ProductImage/cat.png"
import cow from "../ComponentsProduct/ProductImage/cow1.png"
import HeartFavorite from "../../../Components/HeartFavorite";
import {Link} from "react-router-dom";
import ProductSimilar from "./ProductSimilar/productSimilar";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../../../redux/reducer/cart";
import StarRating from "../../../Components/StarRating";


const ProductTitle = () => {

    const {data} = useSelector(state => state.oneProduct)
    const dispatch = useDispatch()



    return (
        <>
            {
                    <section className="product">
                        <div className="container">
                            <div>
                                <ul className="product__order">
                                    <li className="product__order-item">
                                        <Link className="product__order-link" to={"/"}>Главная</Link></li>

                                    <li className="product__order-item">Заказы</li>
                                </ul>
                                <h2 className="product__name">{data.name}</h2>
                                <div className="product__info">
                                    <span className='product__number'>арт. 371431</span>
                                    <div className="product__rating">
                                        <StarRating/>
                                        <span>3 отзыва</span>

                                    </div>
                                    <div className='product__share'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M14.5 5C14.5 3.067 16.067 1.5 18 1.5C19.933 1.5 21.5 3.067 21.5 5C21.5 6.933 19.933 8.5 18 8.5C16.067 8.5 14.5 6.933 14.5 5ZM18 2.5C16.6193 2.5 15.5 3.61929 15.5 5C15.5 6.38071 16.6193 7.5 18 7.5C19.3807 7.5 20.5 6.38071 20.5 5C20.5 3.61929 19.3807 2.5 18 2.5Z"
                                                  fill="#414141"/>
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M2.5 12C2.5 10.067 4.067 8.5 6 8.5C7.933 8.5 9.5 10.067 9.5 12C9.5 13.933 7.933 15.5 6 15.5C4.067 15.5 2.5 13.933 2.5 12ZM6 9.5C4.61929 9.5 3.5 10.6193 3.5 12C3.5 13.3807 4.61929 14.5 6 14.5C7.38071 14.5 8.5 13.3807 8.5 12C8.5 10.6193 7.38071 9.5 6 9.5Z"
                                                  fill="#414141"/>
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M14.5 19C14.5 17.067 16.067 15.5 18 15.5C19.933 15.5 21.5 17.067 21.5 19C21.5 20.933 19.933 22.5 18 22.5C16.067 22.5 14.5 20.933 14.5 19ZM18 16.5C16.6193 16.5 15.5 17.6193 15.5 19C15.5 20.3807 16.6193 21.5 18 21.5C19.3807 21.5 20.5 20.3807 20.5 19C20.5 17.6193 19.3807 16.5 18 16.5Z"
                                                  fill="#414141"/>
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M8.15792 13.2583C8.29695 13.0197 8.60307 12.939 8.84166 13.078L15.6717 17.058C15.9103 17.197 15.991 17.5031 15.8519 17.7417C15.7129 17.9803 15.4068 18.061 15.1682 17.922L8.33819 13.942C8.0996 13.803 8.01889 13.4969 8.15792 13.2583Z"
                                                  fill="#414141"/>
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M15.8418 6.25799C15.981 6.49649 15.9004 6.80266 15.6619 6.94184L8.84194 10.9218C8.60344 11.061 8.29727 10.9805 8.15808 10.742C8.0189 10.5035 8.09941 10.1973 8.33791 10.0582L15.1579 6.07816C15.3964 5.93897 15.7026 6.01948 15.8418 6.25799Z"
                                                  fill="#414141"/>
                                        </svg>
                                        <span>Поделиться</span>
                                    </div>
                                    <div className="product__favorite">
                                        <HeartFavorite item={data} key={data.id} />
                                        <span>В избраное</span>

                                    </div>

                                </div>
                            </div>
                            <div className="basket">
                                <div className="basket__img">
                                    <div className="basket__img-left">
                                        <img src={data.img} alt=""/>
                                        <img src={data.img} alt=""/>
                                        <img src={data.img} alt=""/>
                                        <img src={data.img} alt=""/>
                                        <img src={data.img} alt=""/>

                                    </div>
                                    <div className="basket__img-right">
                                        <img src={data.img} alt=""/>
                                        {
                                            data.discountPercent ? (
                                                <div className="basket__img-discount">{`-${data.discountPercent }%`}</div>
                                                ) : ""

                                        }


                                    </div>


                                </div>
                                <div className="basket__buy">
                                    <div className="basket__price">
                                        <div className="basket__usually">
                       <span className="basket__usually-price">
                           {data.price} ₽
                       </span>
                                            <span className="basket__usually-text">Обычная цена</span>
                                        </div>
                                        <div className="basket__card">
                                            <span className="basket__card-price">{(data.price - (data.price/100*data.discountPercent)).toFixed(2)} ₽</span>
                                            <span className="basket__card-text">С картой Северяночки
                                        <svg width="22" height="22"
                                             viewBox="0 0 22 22"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd"
      d="M0.5 11C0.5 5.20101 5.20101 0.5 11 0.5C16.799 0.5 21.5 5.20101 21.5 11C21.5 16.799 16.799 21.5 11 21.5C5.20101 21.5 0.5 16.799 0.5 11ZM11 1.5C5.75329 1.5 1.5 5.75329 1.5 11C1.5 16.2467 5.75329 20.5 11 20.5C16.2467 20.5 20.5 16.2467 20.5 11C20.5 5.75329 16.2467 1.5 11 1.5Z"
      fill="#414141"/>
</svg>
</span>
                                        </div>

                                    </div>


                                    <button onClick={()=>dispatch(setProducts(data))} className="basket__btn">
                                        <svg className="basket__btn-svg" width="32" height="32" viewBox="0 0 32 32" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M7.33337 28C7.33337 26.1591 8.82576 24.6667 10.6667 24.6667C12.5077 24.6667 14 26.1591 14 28C14 29.841 12.5077 31.3333 10.6667 31.3333C8.82576 31.3333 7.33337 29.841 7.33337 28ZM10.6667 26C9.56214 26 8.66671 26.8954 8.66671 28C8.66671 29.1046 9.56214 30 10.6667 30C11.7713 30 12.6667 29.1046 12.6667 28C12.6667 26.8954 11.7713 26 10.6667 26Z"
                                                  fill="white"/>
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M23.3334 28C23.3334 26.1591 24.8258 24.6667 26.6667 24.6667C28.5077 24.6667 30 26.1591 30 28C30 29.841 28.5077 31.3333 26.6667 31.3333C24.8258 31.3333 23.3334 29.841 23.3334 28ZM26.6667 26C25.5621 26 24.6667 26.8954 24.6667 28C24.6667 29.1046 25.5621 30 26.6667 30C27.7713 30 28.6667 29.1046 28.6667 28C28.6667 26.8954 27.7713 26 26.6667 26Z"
                                                  fill="white"/>
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M1.33329 0.666672C0.965103 0.666672 0.666626 0.965149 0.666626 1.33334C0.666626 1.70153 0.965103 2.00001 1.33329 2.00001H6.10731C7.11706 7.72197 8.13773 13.4191 8.99904 19.1611C9.2438 20.7929 10.6455 22 12.2955 22H25.8129C27.4018 22 28.7698 20.8785 29.0815 19.3204L31.0004 9.72557C31.2479 8.48799 30.3014 7.33334 29.0393 7.33334H9.54725C9.1433 7.33334 8.77059 7.45202 8.45911 7.65458L7.32315 1.21748C7.26693 0.89891 6.99012 0.666672 6.66663 0.666672H1.33329ZM8.88795 9.43223C8.82749 9.02916 9.13967 8.66667 9.54725 8.66667H29.0393C29.46 8.66667 29.7755 9.05155 29.693 9.46408L27.774 19.0589C27.587 19.9938 26.7662 20.6667 25.8129 20.6667H12.2955C11.3055 20.6667 10.4645 19.9424 10.3176 18.9634L8.88795 9.43223Z"
                                                  fill="white"/>
                                        </svg>
                                        <span >В корзину</span>

                                    </button>


                                    <div className="basket__client">
                                        <div className="basket__bonus">
                        <span className="basket__bonus-circle">

                    </span>
                                            <span className="basket__bonus-text">Вы получаете 10 бонусов</span>
                                        </div>
                                        <div className="basket__notification">
                                            <svg className="basket__notification-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M15.2778 3.3842C13.2821 2.21815 10.8173 2.19959 8.80431 3.33546C8.56381 3.47116 8.25884 3.38621 8.12313 3.14572C7.98743 2.90522 8.07238 2.60025 8.31288 2.46454C10.6356 1.15392 13.4796 1.17534 15.7823 2.52079C18.085 3.86623 19.5 6.3333 19.4986 9.00026L18.9986 9H19.4986V9.00026V13C19.4986 13.2761 19.2747 13.5 18.9986 13.5C18.7225 13.5 18.4986 13.2761 18.4986 13V9L18.4986 8.99975C18.4998 6.68838 17.2734 4.55026 15.2778 3.3842ZM6.00937 5.33572C6.25474 5.46239 6.35096 5.764 6.22429 6.00937C5.74707 6.93372 5.49869 7.95911 5.5 8.99937L5.5 9L5.5 14C5.5 14.9793 5.09777 15.8647 4.44949 16.5H17C17.2761 16.5 17.5 16.7239 17.5 17C17.5 17.2761 17.2761 17.5 17 17.5H2C1.72386 17.5 1.5 17.2761 1.5 17C1.5 16.7239 1.72386 16.5 2 16.5C3.38071 16.5 4.5 15.3807 4.5 14V9.00025M10.0191 20.5675C10.258 20.4289 10.5639 20.5103 10.7025 20.7491C10.9708 21.2117 11.4652 21.4965 12 21.4965C12.5348 21.4965 13.0292 21.2117 13.2975 20.7491C13.4361 20.5103 13.742 20.4289 13.9809 20.5675C14.2197 20.7061 14.3011 21.012 14.1625 21.2509C13.7153 22.0219 12.8913 22.4965 12 22.4965C11.1087 22.4965 10.2847 22.0219 9.8375 21.2509C9.69894 21.012 9.78025 20.7061 10.0191 20.5675Z" fill="#414141"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L23.3536 22.6464C23.5488 22.8417 23.5488 23.1583 23.3536 23.3536C23.1583 23.5488 22.8417 23.5488 22.6464 23.3536L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#414141"/>
                                            </svg>
                                            <span className="basket__notification-text">Уведомить о снижении цены</span>

                                        </div>
                                    </div>

                                    <table className="basket__made">
                                        <tr className="basket__brand">
                                            <td>Бренд</td>
                                            <td>ПРОСТОКВАШИНО</td>
                                        </tr>
                                        <tr className="basket__country">
                                            <td>Страна производителя</td>
                                            <td>Россия</td>
                                        </tr>
                                        <tr className="basket__pack">
                                            <td>Упаковка</td>
                                            <td>180 г</td>
                                        </tr>

                                    </table>


                                </div>
                                <ProductSimilar/>



                            </div>


                        </div>
                    </section>

            }




        </>
    );
};

export default ProductTitle;