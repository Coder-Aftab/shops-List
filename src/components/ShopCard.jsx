import React from "react";

function ShopCard(props) {
  const { name, area, category, openingDate, closingDate } = props.data;
  const index = props.index;
  return (
    <div className="shop__card shop__card--outline">
      <span className="sno">{index + 1}.</span>

      <ul className="shop__card__section">
        <li>{name}</li>
        <li>{area}</li>
        <li>{category}</li>
        <li>{openingDate}</li>
        <li>{closingDate}</li>
        <li>
          <button className="btn btn--accent btn--small">Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default ShopCard;
