import React from "react";

function FilterShops() {
  return (
    <div className=" filter__wrapper">
      <header className="filter__header">
        <span>Filter</span>
      </header>
      <ul className="filter__list">
        <li className="list__items">
          <select name="area" id="" className="area__filter">
            <option value="">Area</option>
            <option value="Thane">Thane</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai Suburban">Mumbai Suburban</option>
            <option value="Nashik">Nashik</option>
            <option value="Ahmednagar">Ahmednagar</option>
            <option value="Solapur">Solapur</option>
          </select>
        </li>
        <li className="list__items">
          <select name="category" id="" className="category__filter">
            <option value="">Category</option>
            <option value="Grocery">Grocery</option>
            <option value="Butcher">Butcher</option>
            <option value="Baker">Baker</option>
            <option value="Chemist">Chemist</option>
            <option value="Stationary">Stationary</option>
          </select>
        </li>

        <li className="list__items">Open</li>
        <li className="list__items">Closed</li>
      </ul>
    </div>
  );
}

export default FilterShops;
