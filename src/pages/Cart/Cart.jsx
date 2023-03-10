import React from 'react';

import item from './img/Item.png'
import bread from './img/bread.png'
import './cart.scss'
import {useDispatch, useSelector} from "react-redux";
import {addCount, removeCount, changeChecked, removeProduct, checkedAll} from "../../redux/reducer/cart";


const Cart = () => {
    const dispatch = useDispatch()

    const {data, totalPrice,totalDiscount} = useSelector(store => store.cart)
    return (
        <>
            <section className='section-cart'>

                <div className="container">
                    <div className="cart">
                        <div className='cart__top'>
                            <span className='cart__top-crams'>Главная</span>
                            <span>
                                <svg width="7" height="13" viewBox="0 0 7 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd"
      d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355L1.35355 13.3536C1.15829 13.5488 0.841709 13.5488 0.646447 13.3536C0.451184 13.1583 0.451184 12.8417 0.646447 12.6464L6.29289 7L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
      fill="#414141"/>
</svg></span>
                            <span className='cart__top-cram'>Корзина</span>
                            <h5 className='cart__top-title'>Корзина</h5>
                            <span className='cart__top-lens'>{data.length}</span>
                            <div className='cart__top-select'>
                                    <span className='cart__top-check'>
                                        <svg width="10" height="2" viewBox="0 0 10 2" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd"
      d="M0 1.00001C0 0.81591 0.149238 0.666672 0.333333 0.666672H9.66667C9.85076 0.666672 10 0.81591 10 1.00001C10 1.1841 9.85076 1.33334 9.66667 1.33334H0.333333C0.149238 1.33334 0 1.1841 0 1.00001Z"
      fill="white"/>
</svg>

                                    </span>
                                <button onClick={() => dispatch(checkedAll(item))} className='cart__top-all'>выделить
                                    все
                                </button>
                                <button onClick={() => dispatch(removeProduct(item))}
                                        className='cart__top-delete'>Удалить выбранные
                                </button>
                            </div>
                        </div>
                        <div className='cart__list'>
                            {
                                data.map((item) => (
                                    <div className="cart__item">
                                        <span className='cart__item-check'>
                                            <input onChange={() => dispatch(changeChecked(item))} checked={item.checked} type="checkbox"/>
                                        </span>
                                        <img className="cart__item-img" src={item.img} alt=""/>
                                        <div>
                                            <p className="cart__item-title">{item.name}</p>
                                            <div className="cart__item-prices">
                                                {
                                                    item.discount ? (
                                                        <>
                                                            <div>
                                                                <p style={{fontWeight : 700}}>{(Number(item.price) - (Number(item.price) / 100 * item.discountPercent).toFixed(2))}</p>
                                                                <p style={{fontWeight : 200}}>С картой</p>
                                                            </div>
                                                            <div><p style={{fontWeight : 200}} >{item.price} за шт.</p> <p style={{fontWeight : 200}}>Обычная</p></div>
                                                            <div className="discount">-{item.discountPercent}%</div>
                                                        </>
                                                    ) : (<p style={{fontWeight: item.discount ? 400 : 700}} className="cart__item-subtitle">{item.price} за шт.</p>)
                                                }
                                            </div>
                                        </div>
                                        <div className='cart__item-btns'>
                                            <button onClick={() =>{
                                                if(item.count === 1){
                                                    alert("Минимальное количество товара 1!")
                                                }else{
                                                    dispatch(removeCount(item))
                                                }
                                            }
                                            }
                                                    className="cart__item-minus">
                                                <svg width="16" height="2" viewBox="0 0 16 2" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M0.5 1C0.5 0.723858 0.723858 0.5 1 0.5H15C15.2761 0.5 15.5 0.723858 15.5 1C15.5 1.27614 15.2761 1.5 15 1.5H1C0.723858 1.5 0.5 1.27614 0.5 1Z"
                                                          fill="white"/>
                                                </svg>

                                            </button>
                                            <p className="cart__item-num">{item.count}</p>
                                            <button onClick={() => dispatch(addCount(item))}
                                                    className="cart__item-plus">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M12 4.5C12.2761 4.5 12.5 4.72386 12.5 5V19C12.5 19.2761 12.2761 19.5 12 19.5C11.7239 19.5 11.5 19.2761 11.5 19V5C11.5 4.72386 11.7239 4.5 12 4.5Z"
                                                          fill="white"/>
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
                                                          fill="white"/>
                                                </svg>

                                            </button>
                                        </div>
                                        <div className='cart__item-results'>
                                            {
                                                item.discount ? (
                                                    <>
                                                        <p className="cart__item-price">{(+item.count * +item.price) - ((+item.count * +item.price) / 100 * item.discountPercent).toFixed(2)}₽</p>
                                                        <p className="cart__item-price"><del className="del">{item.count * item.price}₽</del></p>
                                                    </>
                                                ) : (
                                                    <p className="cart__item-price">{item.count * item.price}₽</p>
                                                )
                                            }
                                        </div>

                                    </div>
                                ))
                            }
                            <div className='cart__right'>
                                <div className='cart__right-btns'>
                                    <input type="checkbox" className='cart__right-toggle'/>
                                    <button className='cart__right-btn'></button>
                                    <p className='cart__right-title'>Списать 200 ₽</p>
                                </div>
                                <p className='cart__right-subtitle'>На карте накоплено 200 ₽</p>
                                <p className='cart__right-line'></p>
                                <div className='cart__right-order'>
                                    <p className='cart__right-info'><span>{data.length}</span> товара</p>
                                    <p className='cart__right-sum'>{totalPrice}₽</p>
                                </div>
                                <div className='cart__right-order'>
                                    <p className='cart__right-info'>Скидка</p>
                                    <p className='cart__right-sum red'>{totalDiscount}₽</p>
                                </div>
                                <p className='cart__right-line2'></p>
                                <div className='cart__right-order'>
                                    <p className='cart__right-info'>Итог</p>
                                    <p className='cart__right-sum total'>{(totalPrice - totalDiscount).toFixed(2)}₽</p>
                                </div>
                                <div className='cart__right-smail'>
                                     <span>
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
<path
    d="M23.6883 6.66661H1.31196C0.843143 6.66661 0.460308 7.05823 0.503301 7.52051C0.994639 13.0113 6.17826 17.3333 12.5001 17.3333C18.822 17.3333 24.0056 13.0133 24.497 7.52051C24.5379 7.05823 24.1571 6.66661 23.6883 6.66661Z"
    fill="#70C05B"/>
</svg>
                                    </span>
                                    <p className='cart__right-green'> Вы получяете 100 бонусов</p>
                                </div>
                                <span className='cart__right-notice'>Минимальная сумма заказа 1000р</span>
                                <button disabled={(totalPrice - totalDiscount) < 1000} type="button" className='cart__right-button'>Оформить заказ</button>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Cart;