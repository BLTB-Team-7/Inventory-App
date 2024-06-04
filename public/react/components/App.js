import React, { useState, useEffect } from 'react';
import { ItemsList } from './itemsList';

import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<main>	
      <h1>Items Store</h1>
			<h2>All things 🔥</h2>
			<ItemsList items={items} />
		</main>
	)

		
}