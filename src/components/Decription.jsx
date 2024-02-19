import React from "react";
import items from "../utils/items";

const Decription = () => {
  const itemsDiplay = items.slice(0, 3);

  const getItems = items.slice(3, 5);

  return (
    <div className="bg-orange-600 md:h-screen md:flex md:items-center md:justify-center">
      <div className="py-10">
        {/* --------------------------------------------------------------------------------- */}
        <div className="grid md:grid-cols-3 md:gap-10 space-y-5 md:space-y-0 px-14 md:p-0">
          {itemsDiplay.map((item, index) => (
            <div key={index} className="bg-blue-500 text-center md:p-20 p-10">
              <h1>{item.title}</h1>
              <img
                className="mx-auto"
                src={item.labelBanner}
                alt="AHHAHAHA"
                style={{ width: "100px", height: "100px" }}
              />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
        {/* --------------------------------------------------------------------------------- */}
        <div className=" flex justify-center items-center px-14  pt-5">
          <div className="   grid md:grid-cols-2 w-full md:w-fit md:gap-10 space-y-5 md:space-y-0 ">
            {getItems.map((item, index) => (
              <div key={index} className="bg-blue-500 text-center md:p-20 p-10">
                <h1>{item.title}</h1>
                <img
                  className="mx-auto"
                  src={item.labelBanner}
                  alt="AHHAHAHA"
                  style={{ width: "100px", height: "100px" }}
                />
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decription;
