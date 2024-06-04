import React, { useState, useEffect } from 'react';
import { ItemsList } from './itemsList';

import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);
	const [currentItem, setCurrentItem] = useState(null);

	
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

	if (currentItem) {
		return (
			<main>
				<h1>{currentItem.name}</h1>
				<button onClick={() => setCurrentItem(null)} >All Items </button>
			</main>
		)
	}

	return (
		<main>	
      		<h1>Take Stock App</h1>
			<h2>Company Inventory</h2>

			<ItemsList items={items} />
		</main>
	)
		
}