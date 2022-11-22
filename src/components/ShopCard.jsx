import React from "react";
import { useDispatch } from "react-redux";
import { shopsRemoved } from "../store/shops";
import moment from "moment/moment";
function ShopCard(props) {
  const dispatch = useDispatch();
  const { id, name, area, category, openingDate, closingDate } = props.data;
  const open = moment(openingDate).format("DD-MMM-YYYY");
  const close = moment(closingDate).format("DD-MMM-YYYY");

  const index = props.index;
  return (
    <div className="shop__card shop__card--outline">
      <span className="sno">{index + 1}.</span>

      <ul className="shop__card__section">
        <li>{name}</li>
        <li>
          <span className="card__mobile__content">Area : </span>
          <span>{area}</span>
        </li>
        <li>
          <span className="card__mobile__content">Category : </span>
          <span>{category}</span>
        </li>
        <li>
          <span className="card__mobile__content">Open : </span>
          {open}
        </li>
        <li>
          <span className="card__mobile__content">Close : </span>
          {close}
        </li>
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
