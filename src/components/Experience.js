import "../components/Experience.css"
import React from 'react'
import ExperienceInfo from "./ExperienceInfo"
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Experience() {
  return (
    <div className="experience-div">
            <h1>Some of our experienced influencers</h1>
            <div className="experience">
                {ExperienceInfo.map((experience) => (
                    <div className="experience-info">
                        <img src={experience.imgurl} alt=""/>
                        <div className="experience-content">
                        <h4>{experience.name}</h4>
                        <h6>{experience.experience}</h6>
                        <button> View Store</button>
                        <a href={experience.instaurl} target="_blank"><InstagramIcon className="experience-icon"/></a>
                        <a href={experience.yturl} target="_blank"><YouTubeIcon className="experience-icon"/></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Experience