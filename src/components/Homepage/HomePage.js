import React from 'react'
import Trending from './Trending'
import TeamList from './TeamList'
import AboutUs from './AboutUs.js'
import TrendingInfluencers from './TrendingInfluencers'
import Footer from './Footer'
import Experience from './Experience'
import Announcementbar from "./announcementbar"
import Navbar from './NavBar'

function HomePage() {
  return (
    <>
        <Announcementbar/>
        <Navbar/>
        <AboutUs />
        <TrendingInfluencers />
        <Trending/>
        <Experience/>
        <TeamList/>
        <Footer/>
    </>
  )
}

export default HomePage