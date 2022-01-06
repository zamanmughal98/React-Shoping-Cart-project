import { NavLink } from "react-router-dom";

import "./MainNavigation.css";
function MainNavigation() {
  return (
    <nav className="MainNavigation">
      <ul id="MainNavigation-ul">
        <li className="MainNavigation-li">
          <NavLink activeClassName="navlink" to="/home">
            Home
          </NavLink>
        </li>
        <li className="MainNavigation-li">
          <NavLink activeClassName="navlink" to="/product">
            Products
          </NavLink>
        </li>
        <li className="MainNavigation-li">
          <NavLink activeClassName="navlink" to="/cart">
            Cart
          </NavLink>
        </li>
        <li className="MainNavigation-li">
          <NavLink activeClassName="navlink" to="/bill">
            Bills
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default MainNavigation;
