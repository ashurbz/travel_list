import React from "react";
import "./common.css";

const Item = ({ data }) => {
  console.log(data);
  return (
    <div className="item_container">
      <span>3</span>
      <span>ashish</span>
      <button>X </button>
    </div>
  );
};

export default Item;
