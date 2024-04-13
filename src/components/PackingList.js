import React from "react";
import Item from "./Item";
import "./common.css";

const PackingList = ({ items }) => {
  console.log(items);
  return (
    <div className="items-list">
      {items.map((item) => {
        return <Item data={item} key={item.id} />;
      })}
    </div>
  );
};

export default PackingList;
