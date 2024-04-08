import React, { useState } from "react";
import "./App.css";
import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.css";
import ItemList from "./Component/ItemList";
import Header from "./Component/Header";
import ListForm from "./Component/ListForm";
import Footer from "./Component/Footer";

function App() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCheckedItems = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm("Are you sure you want to clear?");
    if (confirmed) {
      setItems([]);
    }
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterBy(e.target.value);
  };

  const sortItems = (items, criteria) => {
    switch (criteria) {
      case "name":
        return [...items].sort((a, b) => a.name.localeCompare(b.name));
      case "quantity":
        return [...items].sort((a, b) => a.quantity - b.quantity);
      case "checked":
        return [...items].sort((a, b) =>
          a.isChecked === b.isChecked ? 0 : a.isChecked ? -1 : 1
        );
      default:
        return items;
    }
  };

  const filterItems = (items, method) => {
    switch (method) {
      case "finished":
        return items.filter((item) => item.isChecked);
      case "unfinished":
        return items.filter((item) => !item.isChecked);
      default:
        return items;
    }
  };

  const sortedItems = sortItems(items, sortBy);
  const filteredItems = filterItems(sortedItems, filterBy);

  return (
    <div className="App">
      <div className="mainpage-body">
        <Header />
        <ListForm onAddItem={handleAddItem} />
        <div className="btnFeatures">
          <div className="sort-dropdown">
            <button className="clrBtn" onClick={handleClearList}>
              Clear
            </button>
            <select value={sortBy} onChange={handleSortChange}>
              <option value="">Sort by...</option>
              <option value="name">Name</option>
              <option value="quantity">Quantity</option>
              <option value="checked">Checked</option>
            </select>
          </div>
          <div className="filter-dropdown">
            <select
              value={filterBy}
              onChange={handleFilterChange}
              className="form-select mx-2"
            >
              <option value="">Filter by...</option>
              <option value="finished">Finished</option>
              <option value="unfinished">Unfinished</option>
            </select>
          </div>
        </div>
        <ItemList
          items={filteredItems}
          onDeleteItem={handleDeleteItem}
          onCheckedItem={handleCheckedItems}
        />
      </div>
      <Footer items={items} />
    </div>
  );
}

export default App;
