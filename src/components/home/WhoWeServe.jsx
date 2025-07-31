// 08089243417
import React from "react";
import { constants } from "../../utils/constants";

const WhoWeServe = () => {
  return (
    <div className="mt-10 px-5 md:px-10 lg:px-16 w-full items-center justify-center text-center">
      <h1 className="text-[#3C18BE] text-2xl font-bold">INDUSTRIES WE SERVE</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mx-auto">
        {constants.whoWeServe.map((who) => (
            <div className="p-3 shadow-lg rounded-md">
                <div className="flex flex-row items-center justify-start">
                    <img src={who.icon} className="w-16 md:w-20 h-16 md:h-20" />
                    <h3 className="font-bold text-[17px] ml-2">{who.title}</h3>
                </div>
                <p className="text-start text-xs px-2 py-4">{who.descriptions}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeServe;
