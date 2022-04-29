import React from "react";
import LoginForm from "../components/LoginForm";
import "../App.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="loginPage h-screen">
      <div className="pt-24">
        <h1 className="text-center text-lg md:text-xl lg:text-3xl">
          Connexion
        </h1>
      </div>
      <h3
        className="text-center my-6 text-sm md:text-lg font-bold"
        id="contenu"
      >
        Pour participer, connectez-vous à votre compte
        {/* Connectez-vous maintenant et rejoignez la communauté */}
      </h3>
      <LoginForm />
      <p className="bg-white bg-opacity-70 text-center w:3/4 px-1 sm:w-1/2 mx-2 sm:mx-auto mt-16 rounded">
        Vous n'avez pas de compte ? Aucun problème,{" "}
        <Link to="/register">
          <span className="text-gmlime-dark font-bold">Enregistrez-vous!</span>
        </Link>
      </p>
    </div>
  );
}

export default Login;
