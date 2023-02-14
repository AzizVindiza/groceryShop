import React, { useState } from "react";
import { FaStar } from "react-icons/fa"


const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return <div className="star-rating">
        {[...Array(5)].map((star, i) => {
            const ratingValue = i +1;
            return (
                <label>
                    <input
                    className="star-rating__input"
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        />
                    <FaStar
                    className="star-rating__item"
                    color={ratingValue <= (hover || rating) ? "#FF6633" : "#BFBFBF"}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                    />
                </label>
            )
        })}

    </div>
}

export default StarRating