import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { shopsUpdate } from "../store/shops";
function FilterShops() {
  const dispatch = useDispatch();
  const initialState = {
    area: "all",
    category: "all",
    open: "all",
    close: "all",
  };
  const [curFilter, setFilter] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => {
      return {
        ...prevFilter,
        [name]: value,
      };
    });
  };
  console.log(curFilter);
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
            value={setFilter.area}
            onChange={handleChange}
          >
            <option value="all">Area</option>
            <option value="Thane">Thane</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai Suburban">Mumbai Suburban</option>
            <option value="Nashik">Nashik</option>
            <option value="Ahmednagar">Ahmednagar</option>
            <option value="Solapur">Solapur</option>
          </select>
        </li>
        <li className="list__items">
          <select
            name="category"
            id=""
            className="category__filter"
            value={setFilter.category}
            onChange={handleChange}
          >
            <option value="all">Category</option>
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
