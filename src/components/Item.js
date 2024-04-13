import React from "react";
import "./common.css";

const Item = ({ data }) => {
  return (
    <div className="item_container">
      <span>{data.quantity}</span>
      <span>{data.task}</span>
      <button>X </button>
    </div>
  );
};

export default Item;
