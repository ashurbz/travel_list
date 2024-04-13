import React from "react";
import "./common.css";
import InputForm from "./InputForm";

const Header = ({ items, setItems }) => {
  return (
    <div className="container">
      <div className="header">
        <div className="header_text">
          <span>Travel List</span>
        </div>
        <div className="header_img_container">
          <img
            className="header_img"
            src="https://i.pinimg.com/736x/08/9f/d6/089fd61ff8528d3676403e11b2879e23.jpg"
            alt="header_img"
          />
        </div>
      </div>
      <div className="second_header">
        What Do You Need For Your Trip?
        <InputForm items={items} setItems={setItems} />
      </div>
    </div>
  );
};

export default Header;
