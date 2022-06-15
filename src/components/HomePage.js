import React from 'react'
import Trending from './Trending'
import TeamList from './TeamList'
import AboutUs from './AboutUs.js'
import TrendingInfluencers from './TrendingInfluencers'

function HomePage() {
  return (
    <>
        <AboutUs />
        <TrendingInfluencers />
        <Trending/>
        <TeamList/>
    </>
  )
}

export default HomePage