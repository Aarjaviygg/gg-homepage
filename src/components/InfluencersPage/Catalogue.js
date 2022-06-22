import React from 'react'
import './Catalogue.css'
import CatalogueTypes from "./CatalogueTypes"
import tshirt from "../../assets/Rectangle 760.png"
import sale from "../../assets/Frame 11.png"

function Catalogue() {
  return (
    <div className="catalogue-div">
      <h1>Featured Products</h1>
      <div className="catalogue">
        {CatalogueTypes.map((ct) => (
          <div className="catalogue-content">
            <img src={tshirt} alt="" />
            <h4>{ct.name}</h4>
          </div>
        ))}
      </div>
      <img className='influencer-sale' src={sale} alt="" />
    </div>

  )
}

export default Catalogue