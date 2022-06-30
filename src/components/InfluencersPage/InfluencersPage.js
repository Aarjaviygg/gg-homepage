import React from "react";
import Catalogue from "./Catalogue";
import InfluencerBanner from "./InfluencerBanner";
import Bestsellers from "./Bestsellers";
import Footer from "../Homepage/Footer"
import Announcementbar from "../Homepage/announcementbar";
import Navbar from "../Homepage/NavBar";

const InfluencersPage = () => {
    return (
      <div >
      <Announcementbar/>
      <Navbar/>
      <InfluencerBanner/>
      <Catalogue/>
      <Bestsellers/>
      <Footer/>
      </div>
    )
}

export default InfluencersPage