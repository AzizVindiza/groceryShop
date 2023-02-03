import React from 'react';
import "./title.scss"


const Title = (props) => {
    return (
        <>
            <h2 className="Product">{props.name}</h2>
        </>
    );
};

export default Title;