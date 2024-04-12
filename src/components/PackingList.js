import React from "react";
import Item from "./Item";
import "./common.css";

const PackingList = ({ items }) => {
  console.log(items);
  return (
    <div className="items-list">
      {items.map((item) => {
        return <Item data={item} />;
      })}
    </div>
  );
};

export default PackingList;
