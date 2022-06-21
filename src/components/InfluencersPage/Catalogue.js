import React from 'react'
import './Catalogue.css'
import CatalogueTypes from "./CatalogueTypes"

function Catalogue() {
  return (
    <div className="experience-div">
            <h1>Some of our experienced influencers</h1>
            <div className="experience">
                {CatalogueTypes.map((experience) => (
                    <div className="experience-info">
                        {/* <img src={} alt="" /> */}
                        <div className="experience-content">
                            <h4>{experience.name}</h4>
                            <h6>{experience.experience}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Catalogue