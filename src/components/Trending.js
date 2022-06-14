import React from "react";
import Influencers from "../components/Influencers"
import { Link } from "react-router-dom";

function createProduct(influencer) {

    return (
        <Filternext
            id={influencer.id}
            name={influencer.name}
            about={influencer.about}
            url={influencer.url}
        />
    );
}

function Filternext(props) {
    return (

        <div className="influencer-info">
            <Link to="/influencer">
                <img src={props.url} alt="" />
                <h3 id="influencer-name">{props.name}</h3>
            </Link>
            <p id="influencer-about">{props.about}</p>
        </div>

    )
}

function Trending() {
    return (
        <div className="influencer-div">
            <h1>Our Trending Influencers</h1>
            <div className="influencer">{Influencers.map(createProduct)}</div>
        </div>
    )
}

export default Trending