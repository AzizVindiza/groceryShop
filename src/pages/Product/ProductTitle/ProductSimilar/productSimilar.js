import React from 'react';
import cow from "../../ComponentsProduct/ProductImage/cow1.png";

const ProductSimilar = () => {
    return (
        <>
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
        </>
    );
};

export default ProductSimilar;