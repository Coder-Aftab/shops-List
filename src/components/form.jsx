import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { shopsAdded } from "../store/shops";
function Form() {
  const [curId, setId] = useState(4);
  const initialState = {
    id: curId,
    name: "",
    area: "",
    category: "",
    openingDate: "",
    closingDate: "",
  };
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    let value,
      name = e.target.name;
    if (e.target.name === "name") {
      value = e.target.value.replace(/[^a-z," "]/gi, "");
    } else if (name == "closingDate") {
      if (formData.openingDate == "") {
        alert("Please Provide opening date first");
        value = "";
      } else {
        value = e.target.value;
        const greater =
          new Date(value).getTime() - new Date(formData.openingDate).getTime();
        if (greater < 0) {
          alert("Closing date must be greater");
          value = "";
        }
      }
    } else {
      value = e.target.value;
    }

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    dispatch(shopsAdded({ ...formData, id: curId }));
    e.preventDefault();
    setId(curId + 1);
    setFormData(initialState);
    alert("Shop details added");
  };

  return (
    <div className="main--container">
      <form className="input-form" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <h2 className="form__heading">Add Shop</h2>
        </div>
        <div className=" form__input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Shop name"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </div>
        <div className="form__input">
          <label htmlFor="area">Area</label>
          <select
            type="text"
            id="area"
            name="area"
            onChange={handleChange}
            value={formData.area}
          >
            <option value="">---Choose---</option>
            <option value="thane">Thane</option>
            <option value="pune">Pune</option>
            <option value="mumbai suburban">Mumbai Suburban</option>
            <option value="nashik">Nashik</option>
            <option value="ahmednagar">Ahmednagar</option>

            <option value="solapur">Solapur</option>
          </select>
        </div>
        <div className="form__input">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            placeholder="enter shop category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">---Choose---</option>
            <option value="grocery">Grocery</option>
            <option value="butcher">Butcher</option>
            <option value="baker">Baker</option>
            <option value="chemist">Chemist</option>
            <option value="stationary">Stationary</option>
          </select>
        </div>
        <div className=" form__input">
          <label htmlFor="openingDate">Opening Date</label>
          <input
            type="date"
            name="openingDate"
            id="opening-date"
            onChange={handleChange}
            value={formData.openingDate}
            required
          />
        </div>
        <div className=" form__input">
          <label htmlFor="closingDate">Closing Date</label>
          <input
            type="date"
            id="closing-date"
            name="closingDate"
            onChange={handleChange}
            value={formData.closingDate}
            required
          />
        </div>
        <button
          className="tw-btn btn btn--large btn--accent form__submit-btn"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
