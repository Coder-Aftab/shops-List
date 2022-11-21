import { useRef, useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { shopsAdded, shopsRemoved } from "./store/shops";

const App = () => {
  const formRef = useRef(null);
  const getState = useSelector((state) => state);
  const initialState = {
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
      value = e.target.value.replace(/[^a-z]/gi, "");
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
  // console.log(formData);

  const handleSubmit = (e) => {
    console.log(formData);
    dispatch(shopsAdded(formData));
    e.preventDefault();
    setFormData(initialState);
    console.log(getState);
  };
  return (
    <div className="App">
      <form
        className="input-form"
        onSubmit={(e) => handleSubmit(e)}
        ref={formRef}
      >
        <div className=" form__input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="enter shop name"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </div>
        <div className=" form__input">
          <label htmlFor="area">Area</label>
          <select
            type="text"
            id="area"
            name="area"
            placeholder="enter area"
            onChange={handleChange}
            value={formData.area}
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
            value={formData.category}
            onChange={handleChange}
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
        <button className="tw-btn btn btn--large btn--accent form__submit-btn" type="submit">
          Submit
        </button>
      </form>
      <div></div>
    </div>
  );
};

export default App;
