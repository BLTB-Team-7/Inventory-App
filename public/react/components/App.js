import React, { useState, useEffect } from 'react';
import { ItemsList } from './itemsList';

import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);

	
	useEffect(() => {

		async function fetchItems(){
			try {
				const response = await fetch(`${apiURL}/items`);
				const itemsData = await response.json();
				
				setItems(itemsData);
			} catch (err) {
				console.log("Oh no an error! ", err)
			}
		}
	
		fetchItems();
	}, []);

	return (
		<main>	
      		<h1>Take Stock App</h1>
			<h2>Company Inventory</h2>

			<ItemsList items={items} />
		</main>
	)
		
}