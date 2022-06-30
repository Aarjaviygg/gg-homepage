import React from 'react'
import './Bestsellers.css'
import best1 from "../../assets/best.png"
import Products from "./Products"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Bestsellers() {
    return (
        <div className="bestsellers-div">
          <h1>Bestsellers</h1>
          <div className="bestsellers">
            {Products.map((bs) => (
              <div className="bestsellers-content">
                <img src={best1} alt=""/>
                <div className='wishlist'><FavoriteBorderIcon/></div>
                <h4>{bs.name}</h4>
                <hr/>
                <h6>{bs.type}</h6>
                <h4>{bs.price}</h4>
              </div>
            ))}
          </div>
        </div>
    
      )
}

export default Bestsellers