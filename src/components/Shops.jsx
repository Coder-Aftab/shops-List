import React, { useState } from "react";
import FilterShops from "./FilterShops";
import ShopList from "./ShopList";
import { useSelector } from "react-redux";
import { shopsUpdate, filterShops } from "../store/shops";
function Shops() {
  const getState = useSelector((state) => state.shops);
  const initialFilter = {
    area: "all",
    category: "all",
    status: "all",
  };
  const [localFilter, setLocalFilter] = useState(initialFilter);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFilter((prevFilter) => {
      return {
        ...prevFilter,
        [name]: value,
      };
    });
  };
  const curState = filterShops(localFilter)(getState);
  // console.log(localFilter);
  // console.log(curState);
  return (
    <div className="main--container">
      <FilterShops handleChange={handleChange} localFilter={localFilter} />
      <ShopList curState={curState} />
    </div>
  );
}

export default Shops;
