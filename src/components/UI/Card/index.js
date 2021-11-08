import React from 'react'
import './style.css';

export const Card = (props) => {
    return (
        <div className="card"  style={{width: props.width ? props.width:'100%'}}>
            {props.children}
        </div>
    )
}

export default Card;
