import React from 'react';
import "./aboutpoints.scss"

const AboutPoint = (props) => {
    return (
        <>
            <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.47265 22.0891C3.47265 16.325 0.486816 12.3666 0.486816 9.58912C0.486816 6.81162 2.08348 0.977455 14.861 0.977455C27.6385 0.977455 29.5135 8.82496 29.5135 11.88C29.5143 26.1858 3.47265 32.2975 3.47265 22.0891Z" fill="#FCD5BA"/>
            </svg>
            <p className="aboutpoint">{props.description}</p>
            <p className="aboutpoint__txt">{props.text}</p>
        </>
    );
};

export default AboutPoint;