import React, { useEffect, useState } from 'react';
import apiURL from '../api'
 
export const ProductVolume = ({ changePage }) => {
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
<div>
		{items.map(item => (
<div>
<h2>{item.name}</h2>
<p>Quantity: {item.quantity}</p>
</div>
		))}
</div>
</>
  );
};
