import React from "react";
import {Link} from "react-router-dom";

const HeroCard = props => {
    return(
        <div className="hero-card">
            <div className="relative">
                <img
                    src={props.src}
                    alt={""}
                    className="w-full h-1/2 object-cover object-center"
                />
                <span className="tag gold">{props.sportTag}</span>
            </div>


            <p className={props.classes}>
                <Link to={"#"}><h3>{props.title}</h3></Link>
            </p>

        </div>
    )
}
export default HeroCard;