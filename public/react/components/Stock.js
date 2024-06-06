import React, { useEffect, useState } from 'react';
import apiURL from '../api'
 
export const Stock = ({ changePage }) => {
  const [items, setItems] = useState([]);
 
  useEffect(() => {
	async function getItems() {
		const response = await fetch(`${apiURL}/items`);
		const items = await response.json();
		setItems(items);
	}
 
	getItems();
  }, []);
 
  return (
<>
<h1>Stock</h1>
<div classname = "stock1">
		{items.map(item => (
<div>
<h2>{item.name}</h2>
<p>£{item.price}</p>
<p>Quantity: {item.quantity}</p>
<p>{item.description}</p>
<img src={item.image} alt="" className = "image1" />
</div>
		))}
</div>
</>
  );
};
