import React, { useState } from "react";
import "./common.css";

const InputForm = ({ items, setItems }) => {
  const [task, setTask] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleOnChange = (e) => {
    setTask(e.target.value);
  };

  const quantityHandleOnChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      task,
      quantity,
      packed: false,
      id: new Date().toISOString(),
    };

    handleOnClick(newItem);
    setTask("");
    setQuantity(1);
  };

  const handleOnClick = (newItem) => {
    console.log(newItem);
    setItems(() => [...items, newItem]);
  };

  console.log(items);

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <select
          value={Number(quantity)}
          onChange={quantityHandleOnChange}
          className="select"
        >
          {Array.from({ length: 20 }, (_, i) => {
            return i + 1;
          }).map((index) => {
            return (
              <option value={index} key={index}>
                {index}
              </option>
            );
          })}
        </select>
        <input
          className="input"
          type="text"
          placeholder="Add a item"
          value={task}
          onChange={handleOnChange}
        />

        <button className="button" onClick={handleOnClick}>
          ADD
        </button>
      </form>
    </div>
  );
};

export default InputForm;
