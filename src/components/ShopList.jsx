import React, { useState } from "react";
import ShopCard from "./ShopCard";
import ShopListHeader from "./ShopListHeader";
function ShopList(props) {
  //console.log(props.curState);
  return (
    <div className="shop-list shop-list--outline">
      <ShopListHeader />
      {props.curState.map((item, index) => {
        return <ShopCard data={item} key={index} index={index} />;
      })}
    </div>
  );
}

export default ShopList;
