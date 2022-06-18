import React from 'react'
import Trending from './Trending'
import TeamList from './TeamList'
import AboutUs from './AboutUs.js'
import TrendingInfluencers from './TrendingInfluencers'
import Footer from './Footer'
import Experience from './Experience'

function HomePage() {
  return (
    <>
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