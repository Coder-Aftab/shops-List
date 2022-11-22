import React from "react";
import { useDispatch } from "react-redux";
import { shopsRemoved } from "../store/shops";
function ShopCard(props) {
  const dispatch = useDispatch();
  const { id, name, area, category, openingDate, closingDate } = props.data;
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
          <button
            className="btn btn--accent btn--small"
            onClick={() => {
              dispatch(shopsRemoved({ id }));
            }}
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ShopCard;
