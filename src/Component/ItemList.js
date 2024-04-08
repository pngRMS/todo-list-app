import React from "react";
import Item from "./Item";

function ItemList({ items, onDeleteItem, onCheckedItem }) {
  // const todoItems = [
  //   { id: 1, name: "Suka", quantity: "1", isChecked: false },
  //   { id: 2, name: "Patis", quantity: "2", isChecked: false },
  //   { id: 3, name: "Bangus", quantity: "3", isChecked: false },
  // ];

  return (
    <div className="todo-container2">
      <div className="todo-list">
        {items.map((item) => (
          <Item
            itemList={item}
            key={item.name}
            onDeleteItem={onDeleteItem}
            onCheckedItem={onCheckedItem}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
