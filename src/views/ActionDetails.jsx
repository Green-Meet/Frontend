import React, { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import ContactForm from "../components/ContactForm";

function ActionDetails(props) {
  const { id } = useParams();

  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`/actions/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(id);
        setAction(res.data);
      })
      .catch((err) => {
        console.error("ERROR", err);
      });
  }, []);

  const RenderActions = () => {
    return (
      <div className="flex flex-col m-10 space-y-2">
        <h2 className="text-gmlime-light text-2xl mb-10">{action.title}</h2>
        <img></img>
        <div className="flex flex-row">
          <h4 className="text-gmgreen-light text-lg">Organisateur : </h4>
          <p className="text-lg pl-2">{action.organiser_id}</p>
        </div>
        <div className="flex flex-row">
          <h4 className="text-gmgreen-light text-lg">Date : </h4>
          <p className="text-lg pl-2">{action.date}</p>
        </div>
        <div className="flex flex-row">
          <h4 className="text-gmgreen-light text-lg">Horaires : </h4>
          <p className="text-lg pl-2">{action.time}</p>
        </div>
        <div className="flex flex-row">
          <h4 className="text-gmgreen-light text-lg">Adresse :</h4>
          <p className="text-lg pl-2">{action.address}</p>
        </div>
        <div className="flex flex-row">
          <h4 className="text-gmgreen-light text-lg">Ville :</h4>
          <p className="text-lg pl-2">{action.city}</p>
        </div>
        <div>
          <h4 className="text-gmgreen-light text-lg">Détails : </h4>
          <p className="text-md">{action.description}</p>
        </div>
        <div>
          <h4 className="text-gmgreen-light text-lg">
            Contacter l'organisateur :
          </h4>
          <ContactForm />
        </div>
      </div>
    );
  };

  return RenderActions();
}

export default ActionDetails;
