import React from "react";
import Header from "./Header";
import PackingList from "./PackingList";
import "./common.css";

const Layout = () => {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ];

  return (
    <div className="layout">
      <Header />
      <PackingList items={initialItems} />
    </div>
  );
};

export default Layout;
