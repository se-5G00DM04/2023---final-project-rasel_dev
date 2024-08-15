import React, { useEffect, useState } from "react";

const ItemForm = ({ addItem, editItem, setEditItem, updateItem }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (editItem.id) {
      setInputValue(editItem.item);
    } else {
      setInputValue("");
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      alert("Item can not be empty");
      return;
    }
    if (editItem.id) {
      updateItem({ ...editItem, item: inputValue });
    } else {
      addItem(inputValue);
    }
    setInputValue("");
  };

  return (
    <div className="w-100">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add new Item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn" type="submit">{editItem.id ? "Update" : "Add"}</button>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
