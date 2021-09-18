import React from "react";
import {Link} from "react-router-dom";

const HeroCard = props => {
    return(
        <div className="hero-card">
            <div className="relative">
                <img
                    src={props.src}
                    alt={""}
                />
                <span className="tag gold">{props.sportTag}</span>
            </div>


            <div className={props.classes}>
                <Link to={"#"}><h3>{props.title}</h3></Link>
            </div>

        </div>
    )
}
export default HeroCard;