import React from "react";
import TeamInfo from "./TeamInfo";

const TeamList = () => {
    return (
        <div className="team-div">
            <h1>Our Team</h1>
            <div className="team">
                {TeamInfo.map((team) => (
                    <div className="team-info">
                        <img src={team.url} alt=""/>
                        <h4>{team.name}</h4>
                        <h6>{team.position}</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TeamList