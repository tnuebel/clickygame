import React from 'react';
import './Card.css';

const Card = (props) => (
        <div className="col s4 chi-card"
            style={{ backgroundImage: `url("${props.image}")` }}
            onClick={() => props.cardClickedOn(props.id)}
        >
            <p>{props.name} </p>
        </div>
);

export default Card;