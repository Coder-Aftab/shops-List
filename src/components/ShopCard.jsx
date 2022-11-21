import React from "react";

function ShopCard() {
  return (
    <div className="shop__card shop__card--outline">
      <span className="sno">1.</span>

      <ul className="shop__card__section">
        <li>ABC Shop</li>
        <li>Thane</li>
        <li>Chemist</li>
        <li>21-11-2022</li>
        <li>25-11-2022</li>
        <li>
          <button className="btn btn--accent btn--small">Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default ShopCard;
