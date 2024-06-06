import React, { useEffect, useState } from 'react';
import apiURL from '../api'
 
export const Search = ({ changePage }) => {
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
<h1>Search here</h1>
<div>
    <p>Tried but failed</p>
    <p>come back next week</p>
    <p>probs still wont work</p>
</div>
</>
  );
};
