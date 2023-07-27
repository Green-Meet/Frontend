import { React } from "react";
import ArrowButton from "./ArrowButton";
import { useNavigate } from "react-router-dom";

// get action details (button 'voir plus')
function ActionCard(props) {
  let navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/actions/${id}`);
  };
  return (
    <div className="">
      <div className="hover:bg-gmvert-dark ease-in-out transform translate hover:-translate-y-1 hover:scale-105 hover:transition-all duration-500 p-6 h-64 rounded-lg border bg-gray-800 opacity-80 border-gray-700 m-5 flex flex-col relative">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {props.title}
          </h5>
        </a>
        <p className="text-white description">{props.description}</p>
        <div className="sm:w-1/2 absolute bottom-3 left-6">
          <ArrowButton onClick={() => handleClick(props.id)}>
            Voir plus
          </ArrowButton>
        </div>
      </div>
    </div>
  );
}

export default ActionCard;
