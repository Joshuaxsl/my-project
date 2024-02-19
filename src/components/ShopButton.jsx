import React from "react";
import { Link } from "react-router-dom";
import list from "../utils/routes";

const ShopButton = (props) => {
  const storePath = list.find((item) => item.name === "Store").path;
  return (
    <button className="px-5 py-3 bg-orange-600 outline-none text-white rounded-full">
      <Link to={storePath}> {props.children}</Link>
    </button>
  );
};

export default ShopButton;
