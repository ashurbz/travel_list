import React, { useState } from "react";
import Header from "./Header";
import PackingList from "./PackingList";

import "./common.css";

const Layout = () => {
  const [items, setItems] = useState([]);

  return (
    <div className="layout">
      <Header items={items} setItems={setItems} />
      <PackingList items={items} />
    </div>
  );
};

export default Layout;
