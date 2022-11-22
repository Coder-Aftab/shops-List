import React, { useState } from "react";
function FilterShops({ localFilter, handleChange }) {
  return (
    <div className=" filter__wrapper">
      <header className="filter__header">
        <span>Filter</span>
      </header>
      <ul className="filter__list">
        <li className="list__items">
          <select
            name="area"
            id=""
            className="area__filter"
            value={localFilter.area}
            onChange={handleChange}
          >
            <option value="all">Area</option>
            <option value="thane">Thane</option>
            <option value="pune">Pune</option>
            <option value="mumbai suburban">Mumbai Suburban</option>
            <option value="nashik">Nashik</option>
            <option value="ahmednagar">Ahmednagar</option>
            <option value="solapur">Solapur</option>
          </select>
        </li>
        <li className="list__items">
          <select
            name="category"
            id=""
            className="category__filter"
            value={localFilter.category}
            onChange={handleChange}
          >
            <option value="all">Category</option>
            <option value="grocery">Grocery</option>
            <option value="butcher">Butcher</option>
            <option value="baker">Baker</option>
            <option value="chemist">Chemist</option>
            <option value="stationary">Stationary</option>
          </select>
        </li>

        <li className="list__items">
          <label htmlFor="status">Status:</label>
          <select
            name="status"
            value={localFilter.status}
            onChange={handleChange}
            className="category__filter"
          >
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="close">Close</option>
          </select>
        </li>
      </ul>
    </div>
  );
}

export default FilterShops;
