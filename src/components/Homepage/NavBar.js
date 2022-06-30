import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import "./navbar.css";
import Dropdown from "./dropdown";
import Logoicon from "../../assets/logogg.png"
import { AiOutlineShopping } from "react-icons/ai"

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="left">
          <div className="navbarImage">
            <img src={Logoicon} alt="GG Logo" className="logoicon" />
          </div>
        </div>
        <div className="middle">
          <ul>
            <li className="ulList">
              Catalog
            </li>

            <li className="service ulList"
              onClick={() => setDropdown(!dropdown)}
            >
              Influencers Area     <div className="down-icon"> <FaAngleDown /></div>

              {dropdown && <Dropdown />}
            </li>

            <li className="ulList">
              Contact
            </li>
          </ul>
        </div>
        <div className="right">
          <button className="custom-btn btn-1 navbar-button">Log in</button>
          <div className="ic"><AiOutlineShopping size={30} /></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;