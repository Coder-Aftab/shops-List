import React from "react";
import ShopCard from "./shopCard";
import ShopListHeader from "./ShopListHeader";

function ShopList() {
  return (
    <div className="shop-list shop-list--outline">
      <ShopListHeader />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
    </div>
  );
}

export default ShopList;
