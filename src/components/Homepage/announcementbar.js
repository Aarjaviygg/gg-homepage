import React from 'react'
import "./announcementbar.css"
import { AiOutlineArrowRight } from "react-icons/ai"

function Announcementbar() {
  return (
    <div className='announcement'>
      <a href="https://www.guzelgiy.com/">
        <div className="announcementBarContainer">
          <div className="announcement-text">Welcome to GuzelGiy. Login now to get exclusive offers and discounts on shopping for your favourite influencers.
          </div>
          <div className="arrowicon"><AiOutlineArrowRight size={15} className="arrowIcon" /></div>
        </div>
      </a>
    </div>)
}

export default Announcementbar