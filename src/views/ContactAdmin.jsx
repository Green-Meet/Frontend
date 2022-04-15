import React from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";

function ContactAdmin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    
    <div>
      <form
        className="flex flex-col items-center space-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* <div className="grid grid-rows-3 grid-flow-col gap-4 md:w-1/2 lg:w-1/2 xl:w-1/3 space-x-8"> */}
           
          <div className="flex flex-col">
            <label htmlFor="lastName">Last name</label>
            <input
              className="border-2 w-96"
              name="lastName"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <span className="w-full text-red-600 italic text-xs">
                Champs obligatoire
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstName">First name</label>
            <input
              className="border-2 w-96"
              name="firstName"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <span className="w-full text-red-600 italic text-xs">
                Champs obligatoire
              </span>
            )}
          </div>
          
        {/* </div> */}
        <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              className="border-2 w-96"
              {...register("email", {
                required: true,
                maxLength: 100,
                pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,
              })}
            />
            {errors.email && (
              <span className="w-full text-red-600 italic text-xs">
                Please enter a valid email
              </span>
            )}
          </div>
        <div className="flex flex-col">
            <label htmlFor="description">Commentaire</label>
            <textarea
              rows="15"
              className="border-2 h-64 w-96"
              {...register("description", {
                required: true,
                max: 200,
                min: 50,
                maxLength: 500,
                minLength: 20,
              })}
            />

            {errors.description && (
              <span className="w-full text-red-600 italic text-xs">
               Veuillez indiquer votre message
              </span>
            )}
          </div>
          <div className="mt-15">
        <Button type="submit">Soumettre</Button>
        </div>
      </form>
    </div>
  );
}


export default ContactAdmin;
