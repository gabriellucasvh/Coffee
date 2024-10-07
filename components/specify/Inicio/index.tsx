import React from "react";

const Inicio = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-black/70 bg-[url('/graos.png')] bg-cover bg-no-repeat bg-center animate-bgMove"
    >
      <div className="flex flex-col justify-start bg-black/60 items-center p-4 w-[80%] h-[70%] rounded-xl">
        <h1 className="text-9xl text-merino-500 text-center drop-shadow-lg font-bold uppercase">


          Expresso <br /> para você
        </h1>
      </div>
      <span className="absolute bottom-4 right-4 text-xs">
        Image by artbutenkov on Freepik
      </span>
    </div>
  );
};

export default Inicio;
