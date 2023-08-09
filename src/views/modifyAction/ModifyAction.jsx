import React from "react";

import "../../App.css";
import ModifyActionForm from "./modifyActionForm";

function ModifyAction() {
  
    return (
      <div className="addAction">
        <div className="pt-24">
          <h1 className="text-center text-white text-lg md:text-xl lg:text-3xl">
            Modifier votre action
          </h1>
        </div>
        <ModifyActionForm/>
      </div>
    );
  }

export default ModifyAction;
