import React, { useEffect, useState } from "react";
import apiURL from "../api";

export const AddNewStock = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);
  

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState("");


  
  useEffect(() => {
    async function fetchItems() {
      try {
        console.log("Fetching items...");
        const response = await fetch(`${apiURL}/items`);
        const itemsData = await response.json();
        console.log("Items fetched:", itemsData);
        setItems(itemsData);
      } catch (err) {
        console.error("Oh no an error!", err);
      }
    }

    fetchItems();
  }, []);

  async function addItem(event) {
    event.preventDefault();

    console.log("Adding item:", { name, description, price, category, image, quantity });

    const response = await fetch(`${apiURL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, price, category, image, quantity }),
    });

    if (response.ok) {
      const newItem = await response.json();
      console.log("Item added:", newItem);
      setItems([...items, newItem]);
      setName("");
      setDescription("");
      setPrice(0);
      setCategory("");
      setImage("");
      setQuantity("");
      setIsFormShowing(false);
    }
  }

  async function deleteItem(id) {
    console.log("Deleting item:", id);

    const response = await fetch(`${apiURL}/items/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      const filteredItems = items.filter(item => item.id !== id);
      console.log("Item deleted. Remaining items:", filteredItems);
      setItems(filteredItems);
      setCurrentItem(null);
    }
  }

  function confirmDelete(id) {
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      deleteItem(id);
    }
  }

  if (!currentItem) {
    return (
      <main>
        <h1>Fill out form to add new stock</h1>
               
          <form onSubmit={addItem}>
            <p className="huge">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </p>
            <p>
              <label htmlFor="description">Description</label>
              <br />
              <textarea
                name="description"
                id="description"
                value={description}
                onChange={event => setDescription(event.target.value)}
              />
            </p>
            <p>
              <label htmlFor="price">Price</label>
              <br />
              <input
                type="number"
                name="price"
                id="price"
                value={price}
                onChange={event => setPrice(event.target.value)}
              />
            </p>
            <p>
              <label htmlFor="category">Category</label>
              <br />
              <input
                type="text"
                name="category"
                id="category"
                value={category}
                onChange={event => setCategory(event.target.value)}
              />
            </p>
            <p>
              <label htmlFor="image">Image</label>
              <br />
              <input
                type="url"
                name="image"
                id="image"
                value={image}
                onChange={event => setImage(event.target.value)}
              />
            </p>
            <p>
              <label htmlFor="quantity">Quantity</label>
              <br />
              <input
                type="number"
                name="quantity"
                id="quantity"
                value={quantity}
                onChange={event => setQuantity(event.target.value)}
              />
            </p>
            <p>
              <button type="submit">Add Item</button>
            </p>
          </form>
        
              </main>
    );
  }

  return (
    <main>
      <h1>{currentItem.name}</h1>
      <p>£{currentItem.price.toFixed(2)}</p>
      <p>{currentItem.description}</p>
      <img src={currentItem.image} alt={currentItem.name} />
      <p>
        <button onClick={() => setCurrentItem(null)}>All Items</button>
      </p>
      <p>
        <button onClick={() => confirmDelete(currentItem.id)}>Delete Item</button>
      </p>
    </main>
  );
};
