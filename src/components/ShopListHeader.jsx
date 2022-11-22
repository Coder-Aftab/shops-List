import React from "react";

function ShopListHeader() {
  return (
    <div className="filter__wrapper shop-list__header">
      <header className="filter__header">
        <span>S.No</span>
      </header>
      <ul className="filter__list shop-list__list">
        <li className="list__items">Name</li>
        <li className="list__items">Area</li>
        <li className="list__items">Category</li>

        <li className="list__items">Open</li>
        <li className="list__items">Closed</li>
        <li className="list__items">Delete</li>
      </ul>
      <span className="shop__header__mobile">Shop details</span>
    </div>
  );
}

export default ShopListHeader;
