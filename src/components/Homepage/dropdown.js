import React, { useState } from "react";
import { serviceDropdown } from "./NavItems";
import "./dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item) => {
          return (
            <li key={item.id}>
              <div 
                
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}</div>
              
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
