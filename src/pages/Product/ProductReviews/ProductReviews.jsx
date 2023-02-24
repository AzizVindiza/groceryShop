import React from 'react';
import "./productReviews.scss"
import Title from "../ComponentsProduct/Title/Title";
import StarRating from "../../../Components/StarRating";


const ProductReviews = () => {
    return (
        <section className="productReviews">


            <div className='container'>
                <Title name="Отзывы"/>
                <div className="reviews">

                    <div className="rating">
                        <div className="rating__all">
                            <StarRating/>
                            <span className="rating__all-number">4 из 5</span>

                        </div>
                        <div className="rating__others">
                            <div className="rating__five">
                                <span>5</span>

                                <StarRating/>
                                <span>1</span>
                            </div>
                            <div className="rating__four">
                                <span>5</span>

                                <StarRating/>
                                <span>1</span>
                            </div>
                            <div className="rating__three">
                                <span>5</span>

                                <StarRating/>
                                <span>1</span>
                            </div>
                            <div className="rating__two">
                                <span>5</span>

                                <StarRating/>
                                <span>1</span>
                            </div>
                            <div className="rating__one">
                                <span>5</span>

                                <StarRating/>
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                    <div className="rev">
                        <div className='rev__client'>
                            <div className="rev__user">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M12.3333 22.6667C12.3333 21.0098 13.6764 19.6667 15.3333 19.6667H20.6666C22.3234 19.6667 23.6666 21.0098 23.6666 22.6667V24C23.6666 24.1841 23.5173 24.3334 23.3333 24.3334C23.1492 24.3334 22.9999 24.1841 22.9999 24V22.6667C22.9999 21.378 21.9552 20.3334 20.6666 20.3334H15.3333C14.0446 20.3334 12.9999 21.378 12.9999 22.6667V24C12.9999 24.1841 12.8507 24.3334 12.6666 24.3334C12.4825 24.3334 12.3333 24.1841 12.3333 24V22.6667Z"
                                          fill="#414141"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M15 14.6667C15 13.0098 16.3431 11.6667 18 11.6667C19.6569 11.6667 21 13.0098 21 14.6667C21 16.3235 19.6569 17.6667 18 17.6667C16.3431 17.6667 15 16.3235 15 14.6667ZM18 12.3334C16.7113 12.3334 15.6667 13.378 15.6667 14.6667C15.6667 15.9554 16.7113 17 18 17C19.2887 17 20.3333 15.9554 20.3333 14.6667C20.3333 13.378 19.2887 12.3334 18 12.3334Z"
                                          fill="#414141"/>
                                    <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#F3F2F1"/>
                                </svg>
                                <span className="rev__user-name">Татьяна</span>
                            </div>
                            <div className="rev__rating">
                                <StarRating/>
                                <span className="rev__date">22.02.2020</span>
                            </div>
                            <div className="rev__text">
                                <p>приятный вкус</p>
                            </div>
                        </div>
                        <div className='rev__client'>
                            <div className="rev__user">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M12.3333 22.6667C12.3333 21.0098 13.6764 19.6667 15.3333 19.6667H20.6666C22.3234 19.6667 23.6666 21.0098 23.6666 22.6667V24C23.6666 24.1841 23.5173 24.3334 23.3333 24.3334C23.1492 24.3334 22.9999 24.1841 22.9999 24V22.6667C22.9999 21.378 21.9552 20.3334 20.6666 20.3334H15.3333C14.0446 20.3334 12.9999 21.378 12.9999 22.6667V24C12.9999 24.1841 12.8507 24.3334 12.6666 24.3334C12.4825 24.3334 12.3333 24.1841 12.3333 24V22.6667Z"
                                          fill="#414141"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M15 14.6667C15 13.0098 16.3431 11.6667 18 11.6667C19.6569 11.6667 21 13.0098 21 14.6667C21 16.3235 19.6569 17.6667 18 17.6667C16.3431 17.6667 15 16.3235 15 14.6667ZM18 12.3334C16.7113 12.3334 15.6667 13.378 15.6667 14.6667C15.6667 15.9554 16.7113 17 18 17C19.2887 17 20.3333 15.9554 20.3333 14.6667C20.3333 13.378 19.2887 12.3334 18 12.3334Z"
                                          fill="#414141"/>
                                    <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#F3F2F1"/>
                                </svg>
                                <span className="rev__user-name">Маша</span>
                            </div>
                            <div className="rev__rating">
                                <StarRating/>
                                <span className="rev__date">22.02.2020</span>
                            </div>
                            <div className="rev__text">
                                <p>Покупали в том числе в этом весе. Масло по вкусу и органолептическим свойствам совершенно не похоже на натуральное. Упаковка выглядит как напечатанная на дешёвом принтере. На наш взгляд продукт является подделкой или контрафактной продукцией. Просим разобраться.
                                </p>
                            </div>
                        </div>


                        <div className="opinion">
                            <h3 className="opinion__choose">Ваша оценка</h3>
                            <StarRating classname="opinion__choose-star"/>


                        </div>
                        <div >
                        <textarea className="opinion__text" name="" id="" cols="30" rows="10" placeholder="Отзыв">

                        </textarea>
                            <button className="opinion__btn">Отправить отзыв</button>
                        </div>

                    </div>
                </div>




            </div>


        </section>
    );
};

export default ProductReviews;