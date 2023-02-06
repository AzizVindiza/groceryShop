import React from 'react';
import "./contactstel.css"

const ContactsTel = (props) => {
    return (
        <>
            <p className="contacts__department">{props.department}</p>
            <p className="contacts__tel">{props.tel}</p>
        </>
    );
};

export default ContactsTel;