import React, { useState } from "react";
import ShopCard from "./ShopCard";
import ShopListHeader from "./ShopListHeader";
import { useSelector } from "react-redux";
function ShopList() {
  const getShops = useSelector((state) => state.shops);
  console.log(getShops);
  return (
    <div className="shop-list shop-list--outline">
      <ShopListHeader />
      {getShops.map((item, index) => {
        return <ShopCard data={item} key={index} index={index} />;
      })}
    </div>
  );
}

export default ShopList;
