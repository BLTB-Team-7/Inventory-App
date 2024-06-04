import React from 'react';

export const Item = (props) => {

  return <>
  <ul>
    <h3>{props.item.name}</h3>
    <p>£{props.item.price}</p>
    <p>{props.item.category}</p>
    <p>{props.item.description}</p>
    <p>Available stock: {props.item.quantity}</p>
  </ul>
    <img src={props.item.image} alt={props.item.name} class = "image1"/>
    
   </>
} 
	