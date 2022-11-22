import React, { useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import DashBoard from "./components/DashBoard";
import PlayGround from "./playground";
import NavBar from "./components/NavBar";
import Shops from "./components/Shops";
import AsideBar from "./components/AsideBar";
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <AsideBar />
      <Routes>
        <Route path="/" element={<DashBoard />}></Route>
        <Route path="/addshop" element={<Form />}></Route>
        <Route path="/playground" element={<PlayGround />}></Route>
        <Route path="/shops" element={<Shops />}></Route>
      </Routes>
    </div>
  );
};

export default App;
