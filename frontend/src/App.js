import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";

const API_URL = "http://localhost:5000/api/v1/shoppingItems";
const App = () => {
  const [shoppingItems, setShoppingItems] = useState([]);

  const [editItem, setEditItem] = useState({
    id: "",
    item: "",
  });

  useEffect(() => {
    fetchShoppingItems();
  }, []);

  const fetchShoppingItems = async () => {
    try {
      const response = await axios.get(API_URL);
      setShoppingItems(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching shopping items", error);
    }
  };

  const addItem = async (item) => {
    try {
      const response = await axios.post(API_URL, { item });
      setShoppingItems([...shoppingItems, response.data]);
    } catch (error) {
      console.error("Error adding shopping item", error);
    }
  };

  const updateItem = async (item) => {
    try {
      const response = await axios.put(`${API_URL}/${item.id}`, {
        item: item.item,
      });
      const updatedItems = shoppingItems.map((i) =>
        i.id === item.id ? response.data : i
      );
      setShoppingItems(updatedItems);
      setEditItem({ id: "", item: "" });
    } catch (error) {
      console.error("Error updating shopping item ", error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      const updatedItems = shoppingItems.filter((i) => i.id !== id);
      setShoppingItems(updatedItems);
    } catch (error) {
      console.error("Error deleting shopping item", error);
    }
  };

  const handleEdit = (item) =>{
    setEditItem(item);
  }
  return (
    <div className="App container">
      <div
      className="container d-flex flex-column w-60 align-item-center shopping-list"
      >
        <h1>Shopping List</h1>
        <ItemForm addItem={addItem} 
        editItem={editItem}
          setEditItem={setEditItem}
          updateItem={updateItem}
        
        />
        <ItemList
        items={shoppingItems}
        handleEdit={handleEdit}
        handleeDelete={deleteItem}
        />

      </div>
    </div>
  );
};

export default App;
