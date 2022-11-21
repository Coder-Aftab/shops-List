import { useRef, useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { shopsAdded, shopsRemoved } from "./store/shops";
import Form from "./components/form";

const App = () => {
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
      <Form
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
