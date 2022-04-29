import React from "react";
import RegisterForm from "../components/RegisterForm";
import Title from "../components/Title";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="registerPage">
      <div className="bg-white bg-opacity-50 sm:bg-transparent h-52 flex flex-col space-y-5">
        <div className="pt-24">
          <h1 className="text-center text-2xl font-bold md:font-normal md:text-3xl text-blue-500">
            S'enregistrer
          </h1>
        </div>
        <h3
          className="text-center text-sm md:text-md font-bold text-blue-500"
          id="contenu"
        >
          Connectez-vous maintenant et rejoignez la communauté
        </h3>
      </div>

      <RegisterForm />
      <p className="text-center w:3/4 px-1 sm:w-1/2 mx-2 sm:mx-auto my-8 rounded">
        Déjà engagé ?{" "}
        <Link to="/login">
          <span className="text-gmlime-light font-bold">Je me connecte</span>
        </Link>
      </p>
    </div>
  );
}

export default Register;
