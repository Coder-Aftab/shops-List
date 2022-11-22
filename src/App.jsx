import React, { useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { shopsAdded } from "./store/shops";
import Form from "./components/Form";
import DashBoard from "./components/DashBoard";
import PlayGround from "./playground";
import NavBar from "./components/NavBar";
import Shops from "./components/Shops";
import AsideBar from "./components/AsideBar";
const App = () => {
  const [curId, setId] = useState(0);
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
      value = e.target.value.replace(/[^a-z]/gi, "");
    } else if (name == "closingDate") {
      if (formData.openingDate == "") {
        alert("Please Provide opening date first");
        value = "";
      } else {
        value = e.target.value;
        const greater =
          new Date(value).getTime() - new Date(formData.openingDate).getTime();
        if (greater < 0) {
          alert("Opening Date Must be greater");
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
  };
  return (
    <div className="App">
      <NavBar />
      <AsideBar />
      <Routes>
        <Route path="/" element={<DashBoard />}></Route>
        <Route
          path="/addshop"
          element={
            <Form
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          }
        ></Route>
        <Route path="/playground" element={<PlayGround />}></Route>
        <Route path="/shops" element={<Shops />}></Route>
      </Routes>
    </div>
  );
};

export default App;
