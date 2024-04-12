import React from "react";
import "./common.css";

const InputForm = () => {
  return (
    <div>
      <form>
        <select className="select"></select>
        <input className="input" type="text" placeholder="Add a item" />

        <button className="button">ADD</button>
      </form>
    </div>
  );
};

export default InputForm;
