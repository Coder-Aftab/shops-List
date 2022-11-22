import React from "react";

function ShopListHeader() {
  return (
    <div className="shop__card shop-list__header">
      <header className="sno">
        <span>S.No</span>
      </header>
      <ul className="shop__card__section shop-list__list">
        <li>Name</li>
        <li>Area</li>
        <li>Category</li>

        <li>Open</li>
        <li>Closed</li>
        <li>Delete</li>
      </ul>
      <span className="shop__header__mobile">Shop details</span>
    </div>
  );
}

export default ShopListHeader;
