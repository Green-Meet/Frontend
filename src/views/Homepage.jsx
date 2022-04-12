import React from "react";
import ActionCard from "../components/ActionCard";
import Title from "../components/Title";

function Homepage() {
  return (
    <>
      <div>
        <Title />
        <img
          src="/img/balais.jpg"
          alt="Balais"
          className="h-72 md:h-80 w-full md:w-5/6 lg:h-96 mx-auto"
        />
        <h3 className="m-3 text-gmgreen font-bold text-lg">
          Qu'est-ce que Green Meet ?
        </h3>
        <p className="mx-3 text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          illo, porro id voluptatum illum est dignissimos exercitationem.
          Expedita, quas pariatur! Aliquid ducimus commodi ipsam. Culpa minima
          quia perferendis minus sed dolorum dolores! Sint exercitationem
          reprehenderit in cum quisquam accusamus quam, quibusdam molestiae
          doloremque repudiandae. Libero autem minus expedita cupiditate veniam
          quo dolore est consectetur vero. Nobis nemo et tempore, voluptates
          laboriosam tenetur doloribus est iusto cum quisquam, expedita minus
          maxime adipisci debitis aliquam beatae alias. Nihil obcaecati,
          voluptatibus velit dolor iusto totam error est, voluptate saepe
          cupiditate distinctio cum praesentium perferendis. Odio eos itaque
          ratione vitae laudantium obcaecati ad voluptatibus sequi, nulla iste
          ullam praesentium. Corporis, laudantium repellendus culpa et natus
          exercitationem quas possimus aliquid eveniet reiciendis quo ab eos
          voluptas enim, dicta maxime obcaecati quia vitae optio sint beatae
          rem? Labore dolorem itaque adipisci assumenda officia tempore voluptas
          eius!
        </p>
      </div>
      <div className="flex flex-row">
        <ActionCard />
        <ActionCard />
        <ActionCard />
      </div>
    </>
  );
}

export default Homepage;
