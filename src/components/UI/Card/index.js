import React from 'react'
import './style.css';

export const Card = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Card;
