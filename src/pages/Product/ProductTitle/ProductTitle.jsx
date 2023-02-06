import React from 'react';
import "./productTitle.scss";
import "../ComponentsProduct/Title/Title"

import small_cat from "../ComponentsProduct/ProductImage/small_cat.png"
import cat from "../ComponentsProduct/ProductImage/cat.png"
import cow from "../ComponentsProduct/ProductImage/cow1.png"




const ProductTitle = () => {
    return (
        <>
            <section className="product">
                <div className="container">
                    <h2 className="product__name">Масло ПРОСТОКВАШИНО сливочное в/с 82% фольга без змж, Россия, 180 г</h2>
                    <div className="product__info">
                        <span className='product__number'>арт. 371431</span>
                        <div className="product__rating">
                            <svg width="96" height="16" viewBox="0 0 96 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.10326 1.81698C7.47008 1.07374 8.52992 1.07374 8.89674 1.81699L10.1185 4.29249C10.2641 4.58763 10.5457 4.7922 10.8714 4.83953L13.6033 5.2365C14.4235 5.35568 14.751 6.36365 14.1575 6.94219L12.1807 8.8691C11.945 9.09884 11.8375 9.42984 11.8931 9.75423L12.3598 12.4751C12.4999 13.292 11.6424 13.9149 10.9088 13.5293L8.46534 12.2446C8.17402 12.0915 7.82598 12.0915 7.53466 12.2446L5.09119 13.5293C4.35756 13.9149 3.50013 13.292 3.64024 12.4751L4.1069 9.75423C4.16254 9.42984 4.05499 9.09884 3.81931 8.8691L1.8425 6.94219C1.24898 6.36365 1.57649 5.35568 2.39671 5.2365L5.12859 4.83953C5.4543 4.7922 5.73587 4.58763 5.88153 4.29249L7.10326 1.81698Z"
                                    fill="#FF6633"/>
                                <path
                                    d="M27.1033 1.81698C27.4701 1.07374 28.5299 1.07374 28.8967 1.81699L30.1185 4.29249C30.2641 4.58763 30.5457 4.7922 30.8714 4.83953L33.6033 5.2365C34.4235 5.35568 34.751 6.36365 34.1575 6.94219L32.1807 8.8691C31.945 9.09884 31.8375 9.42984 31.8931 9.75423L32.3598 12.4751C32.4999 13.292 31.6424 13.9149 30.9088 13.5293L28.4653 12.2446C28.174 12.0915 27.826 12.0915 27.5347 12.2446L25.0912 13.5293C24.3576 13.9149 23.5001 13.292 23.6402 12.4751L24.1069 9.75423C24.1625 9.42984 24.055 9.09884 23.8193 8.8691L21.8425 6.94219C21.249 6.36365 21.5765 5.35568 22.3967 5.2365L25.1286 4.83953C25.4543 4.7922 25.7359 4.58763 25.8815 4.29249L27.1033 1.81698Z"
                                    fill="#FF6633"/>
                                <path
                                    d="M47.1033 1.81698C47.4701 1.07374 48.5299 1.07374 48.8967 1.81699L50.1185 4.29249C50.2641 4.58763 50.5457 4.7922 50.8714 4.83953L53.6033 5.2365C54.4235 5.35568 54.751 6.36365 54.1575 6.94219L52.1807 8.8691C51.945 9.09884 51.8375 9.42984 51.8931 9.75423L52.3598 12.4751C52.4999 13.292 51.6424 13.9149 50.9088 13.5293L48.4653 12.2446C48.174 12.0915 47.826 12.0915 47.5347 12.2446L45.0912 13.5293C44.3576 13.9149 43.5001 13.292 43.6402 12.4751L44.1069 9.75423C44.1625 9.42984 44.055 9.09884 43.8193 8.8691L41.8425 6.94219C41.249 6.36365 41.5765 5.35568 42.3967 5.2365L45.1286 4.83953C45.4543 4.7922 45.7359 4.58763 45.8815 4.29249L47.1033 1.81698Z"
                                    fill="#BFBFBF"/>
                                <path
                                    d="M67.1033 1.81698C67.4701 1.07374 68.5299 1.07374 68.8967 1.81699L70.1185 4.29249C70.2641 4.58763 70.5457 4.7922 70.8714 4.83953L73.6033 5.2365C74.4235 5.35568 74.751 6.36365 74.1575 6.94219L72.1807 8.8691C71.945 9.09884 71.8375 9.42984 71.8931 9.75423L72.3598 12.4751C72.4999 13.292 71.6424 13.9149 70.9088 13.5293L68.4653 12.2446C68.174 12.0915 67.826 12.0915 67.5347 12.2446L65.0912 13.5293C64.3576 13.9149 63.5001 13.292 63.6402 12.4751L64.1069 9.75423C64.1625 9.42984 64.055 9.09884 63.8193 8.8691L61.8425 6.94219C61.249 6.36365 61.5765 5.35568 62.3967 5.2365L65.1286 4.83953C65.4543 4.7922 65.7359 4.58763 65.8815 4.29249L67.1033 1.81698Z"
                                    fill="#BFBFBF"/>
                                <path
                                    d="M87.1033 1.81698C87.4701 1.07374 88.5299 1.07374 88.8967 1.81699L90.1185 4.29249C90.2641 4.58763 90.5457 4.7922 90.8714 4.83953L93.6033 5.2365C94.4235 5.35568 94.751 6.36365 94.1575 6.94219L92.1807 8.8691C91.945 9.09884 91.8375 9.42984 91.8931 9.75423L92.3598 12.4751C92.4999 13.292 91.6424 13.9149 90.9088 13.5293L88.4653 12.2446C88.174 12.0915 87.826 12.0915 87.5347 12.2446L85.0912 13.5293C84.3576 13.9149 83.5001 13.292 83.6402 12.4751L84.1069 9.75423C84.1625 9.42984 84.055 9.09884 83.8193 8.8691L81.8425 6.94219C81.249 6.36365 81.5765 5.35568 82.3967 5.2365L85.1286 4.83953C85.4543 4.7922 85.7359 4.58763 85.8815 4.29249L87.1033 1.81698Z"
                                    fill="#BFBFBF"/>
                            </svg>
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
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12.7046 4.25644C13.8299 3.13067 15.3564 2.49817 16.9482 2.49817C18.5399 2.49817 20.0664 3.13063 21.1916 4.25636C22.3174 5.38164 22.95 6.90829 22.95 8.49999C22.95 10.0917 22.3175 11.6183 21.1917 12.7435C21.1917 12.7436 21.1917 12.7435 21.1917 12.7435L12.3517 21.5835C12.1565 21.7788 11.8399 21.7788 11.6446 21.5835L2.80461 12.7435C0.460963 10.3999 0.460963 6.60009 2.80461 4.25644C5.14826 1.91279 8.94807 1.91279 11.2917 4.25644L11.9982 4.96289L12.7046 4.25644C12.7046 4.25641 12.7046 4.25647 12.7046 4.25644ZM16.9482 3.49817C15.6217 3.49817 14.3496 4.02528 13.4118 4.96346L12.3517 6.02355C12.258 6.11732 12.1308 6.16999 11.9982 6.16999C11.8656 6.16999 11.7384 6.11732 11.6446 6.02355L10.5846 4.96355C8.63149 3.01042 5.46484 3.01042 3.51172 4.96355C1.55859 6.91667 1.55859 10.0833 3.51172 12.0364L11.9982 20.5229L20.4846 12.0364C21.4228 11.0987 21.95 9.82648 21.95 8.49999C21.95 7.17351 21.4229 5.90138 20.4847 4.96363C19.5469 4.02544 18.2747 3.49817 16.9482 3.49817Z"
                                      fill="#414141"/>
                            </svg>
                            <span>В избраное</span>

                        </div>

                    </div>
                    <div className="basket">
                        <div className="basket__img">
                            <div className="basket__img-left">
                                <img src={small_cat} alt=""/>
                                <img src={small_cat} alt=""/>
                                <img src={small_cat} alt=""/>
                                <img src={small_cat} alt=""/>
                                <img src={small_cat} alt=""/>
                            </div>
                            <div className="basket__img-right">
                                <img src={cat} alt=""/>
                                <div className="basket__img-discount">-50%</div>

                            </div>


                        </div>
                        <div className="basket__buy">
                            <div className="basket__price">
                                <div className="basket__usually">
                       <span className="basket__usually-price">
                           192,69 ₽
                       </span>
                                    <span className="basket__usually-text">Обычная цена</span>
                                </div>
                                <div className="basket__card">
                                    <span className="basket__card-price">108,99 ₽</span>
                                    <span className="basket__card-text">С картой Северяночки <svg width="22" height="22"
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


                            <button className="basket__btn">
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
                                <span>В корзину</span>

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


                            <div className="basket__made">
                                <div className="basket__brand">
                                    <span className="basket__brand-left">Бренд</span>
                                    <span className="basket__brand-right">ПРОСТОКВАШИНО</span>
                                </div>
                                <div className="basket__country">
                                    <span  className="basket__brand-left">Страна производителя</span>
                                    <span className="basket__brand-right">Россия</span>
                                </div>
                                <div className="basket__pack">
                                    <span  className="basket__brand-left">Упаковка</span>
                                    <span className="basket__brand-right">180 г</span>
                                </div>


                            </div>



                        </div>
                        <div className="basket__similar">
                            <h3 className="basket__similar-title">Похожие</h3>
                            <div className="basket__similar-dist">
                                <div className="">
                                    <img src={cow} alt=""/>
                                    <span className="basket__similar-price">157,50 ₽</span>
                                </div>
                                <div className="">
                                    <img src={cow} alt=""/>
                                    <span className="basket__similar-price">157,50 ₽</span>
                                </div>
                                <div className="">
                                    <img src={cow} alt=""/>
                                    <span className="basket__similar-price">157,50 ₽</span>
                                </div>
                                <div className="">
                                    <img src={cow} alt=""/>
                                    <span className="basket__similar-price">157,50 ₽</span>
                                </div>

                            </div>

                        </div>


                    </div>


                </div>
            </section>


        </>
    );
};

export default ProductTitle;