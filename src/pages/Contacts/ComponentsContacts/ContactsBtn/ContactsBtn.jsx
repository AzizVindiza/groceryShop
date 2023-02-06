import React from 'react';
import "./contactsbtn.css"

const ContactsBtn = (props) => {
    return (
        <>
            <button className="contactsbtn">{props.place}</button>
        </>
    );
};

export default ContactsBtn;