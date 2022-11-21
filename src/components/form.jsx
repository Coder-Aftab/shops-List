import React from "react";

function Form(props) {
  return (
    <div>
      <form className="input-form" onSubmit={(e) => props.handleSubmit(e)}>
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
            onChange={props.handleChange}
            value={props.formData.name}
            required
          />
        </div>
        <div className="form__input">
          <label htmlFor="area">Area</label>
          <select
            type="text"
            id="area"
            name="area"
            onChange={props.handleChange}
            value={props.formData.area}
          >
            <option value="">---Choose---</option>
            <option value="Thane">Thane</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai Suburban">Mumbai Suburban</option>
            <option value="Nashik">Nashik</option>
            <option value="Ahmednagar">Ahmednagar</option>

            <option value="Solapur">Solapur</option>
          </select>
        </div>
        <div className=" form__input">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            placeholder="enter shop category"
            value={props.formData.category}
            onChange={props.handleChange}
            required
          >
            <option value="">---Choose---</option>
            <option value="Grocery">Grocery</option>
            <option value="Butcher">Butcher</option>
            <option value="Baker">Baker</option>
            <option value="Chemist">Chemist</option>
            <option value="Stationary">Stationary</option>
          </select>
        </div>
        <div className=" form__input">
          <label htmlFor="openingDate">Opening Date</label>
          <input
            type="date"
            name="openingDate"
            id="opening-date"
            onChange={props.handleChange}
            value={props.formData.openingDate}
            required
          />
        </div>
        <div className=" form__input">
          <label htmlFor="closingDate">Closing Date</label>
          <input
            type="date"
            id="closing-date"
            name="closingDate"
            onChange={props.handleChange}
            value={props.formData.closingDate}
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
