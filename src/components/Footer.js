import React from 'react';

const Footer = (props) => {
    console.log(props.mensaje)
    return (
        <div className="text-white my-4 py-4 text-center">
            <p>{props.mensaje}</p>
            
        </div>
    );
};

export default Footer;