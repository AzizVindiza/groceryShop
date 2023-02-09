import React, {useState} from 'react';
import Heart from "react-heart"

const HeartFavorite = () => {
    const [active,setActive] = useState(false)
    return (
        <div className="cart__favorite" style={{width:"1.4rem"}}>
            <Heart onClick={()=> setActive(!active)} isActive={active}/>
        </div>
    );
};

export default HeartFavorite;