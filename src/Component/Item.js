import React from "react";

function Item({ itemList, onDeleteItem, onCheckedItem }) {
  const handleDeleteClick = () => {
    onDeleteItem(itemList.id);
  };
  const handleCheckedItems = () => {
    onCheckedItem(itemList.id);
  };
  return (
    <div>
      {" "}
      <div class="todo-list">
        <div class="todo-item">
          <div class="checker">
            <span class=""></span>
          </div>

          <span
            style={{
              textDecoration: itemList.isChecked ? "line-through" : "none",
            }}
          >
            {"Qty:" + itemList.quantity + " " + itemList.name}
          </span>
          <div className="group-buttons">
            <button
              className="float-right remove-todo-item"
              onClick={handleDeleteClick}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
            <button
              className="float-right remove-todo-item"
              onClick={handleCheckedItems}
            >
              <i class="fa-solid fa-check"></i>
            </button>
          </div>
        </div>
      </div>
      {/* <div class="todo-item">
        <div class="checker">
          <span class="">
            <input type="checkbox" />
          </span>
        </div>
        <span>Organize office main department</span>
        <a href="javascript:void(0);" className="float-right remove-todo-item">
          <i class="fa-solid fa-trash"></i>
        </a>
      </div>
      <div class="todo-item">
        <div class="checker">
          <span>
            <input type="checkbox" />
          </span>
        </div>
        <span>Kumain ng pares ni romnick</span>
        <a href="javascript:void(0);" className="float-right remove-todo-item">
          <i class="fa-solid fa-trash"></i>
        </a>
      </div> */}
    </div>
  );
}

export default Item;
