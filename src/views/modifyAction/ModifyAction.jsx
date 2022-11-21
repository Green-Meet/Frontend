import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// Components
import Button from "../../components/Button";
// toastify
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

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
