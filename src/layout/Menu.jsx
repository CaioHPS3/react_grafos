import React from "react";
import { Link } from "react-router-dom";
import "../css/Menu.css";

const Menu = () => {
  return (
    <>
    
      <nav className="menu">
        <ul className="menu__list-user">
          {/* <li className="menu__item">
          <Link className="menu__link" to="/profile">
            Profile
          </Link>
        </li> */}

          <li className="menu__item">
            <Link className="menu__link" to="/login">
              <button className="menu--button" type="button">
                Log In
              </button>
            </Link>
          </li>

          <li className="menu__item">
            <Link className="menu__link" to="/signup">
              <button className="menu--button" type="button">
                Sign Up
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
