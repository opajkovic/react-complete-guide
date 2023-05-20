import React from 'react';
import './Card.css';

function Card(props) {
    console.log(props.className)
    const classes = 'card ' + props.className;
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export default Card
