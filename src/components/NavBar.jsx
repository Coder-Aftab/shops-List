import React from "react";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/">
        <header>
          <h1 className="nav__heading">Shop List App</h1>
        </header>
      </NavLink>
    </nav>
  );
}

export default NavBar;
