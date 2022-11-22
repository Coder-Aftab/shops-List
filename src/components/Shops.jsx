import React from "react";
import FilterShops from "./FilterShops";
import ShopList from "./ShopList";
function Shops() {
  return (
    <div className="main--container">
      <FilterShops />
      <ShopList/>
    </div>
  );
}

export default Shops;
