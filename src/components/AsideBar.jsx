import React from "react";

import { NavLink } from "react-router-dom";
function AsideBar() {
  return (
    <div className="aside-bar">
      <NavLink
        to="/shops"
        className={({ isActive }) =>
          isActive
            ? "active btn btn--accent btn--large"
            : "btn btn--accent btn--large"
        }
      >
        List Shops
      </NavLink>
      <NavLink
        to="/addshop"
        className={({ isActive }) =>
          isActive
            ? "active btn btn--accent btn-large"
            : "btn btn--accent btn--large"
        }
      >
        Add Shop
      </NavLink>
    </div>
  );
}

export default AsideBar;
