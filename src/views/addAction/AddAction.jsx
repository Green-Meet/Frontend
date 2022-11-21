import React from "react";

import "../../App.css";
import AddActionForm from "./AddActionForm";

function AddAction() {
  return (
    <div className="addAction">
      <div className="pt-24">
        <h1 className="text-center text-white text-lg md:text-xl lg:text-3xl">
          Organiser une action
        </h1>
      </div>
      <AddActionForm/>
    </div>
  );
}

export default AddAction;
