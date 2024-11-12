import React from "react";

const Inicio = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[url('/graos.png')] bg-cover bg-no-repeat bg-center animate-bgMove">
      <div className="flex flex-col justify-start items-center p-4 w-[90%] h-[70%] rounded-xl lg:w-[80%]">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-yellow-500 text-center drop-shadow-lg font-bold uppercase">
          Expresso <br /> para você
        </h1>
      </div>
      <span className="absolute bottom-4 right-4 text-[0.6rem] sm:text-xs">
        Image by artbutenkov on Freepik
      </span>
    </div>
  );
};

export default Inicio;
