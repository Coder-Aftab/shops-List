import React, { useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { shopsAdded, shopsRemoved } from "./store/shops";
import Form from "./components/Form";
import DashBoard from "./components/DashBoard";
import PlayGround from "./playground";
import NavBar from "./components/NavBar";
import Shops from "./components/Shops";
import AsideBar from "./components/AsideBar";
const App = () => {
  const getState = useSelector((state) => state);
  const [curId, setId] = useState(0);

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

  const handleSubmit = (e) => {
    setId(curId + 1);
    //console.log(formData);
    dispatch(shopsAdded({ ...formData, id: curId }));
    e.preventDefault();
    setFormData(initialState);
    //console.log(getState);
  };
  //console.log(new Date());
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
