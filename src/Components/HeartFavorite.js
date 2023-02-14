import React, {useState} from 'react';
import Heart from "react-heart"

const HeartFavorite = (props) => {
    const [active,setActive] = useState(false)
    return (
        <div className={props.class} style={{width:"1.4rem"}}>
            <Heart onClick={()=> setActive(!active)} isActive={active}/>
        </div>
    );
};

export default HeartFavorite;