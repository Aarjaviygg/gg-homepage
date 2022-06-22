import React from 'react'
import influencer from "../../assets/technology 1.png"
import "./InfluencerBanner.css"

function InfluencerBanner() {
  return (
    <div className='influencer-banner'>
        <div className='influencer-banner-content'>
            <h5>Katy Perry official merchandise store</h5>
            <h1>NEW COLLECTION</h1>
            <h4>Shop exclusively from official merchandise store of Katy Perry.</h4>
            <button>SHOP NOW</button>
        </div>
        <img src={influencer} alt=""/>
    </div>
  )
}

export default InfluencerBanner