import React from "react";
import {Link} from "react-router-dom";

const ArticleCard = props => {
  return(
      <div className="article-card">
          <div className="relative">
              <img
                  src={props.src}
                  alt={""}
                  className="w-full h-1/2 object-cover object-center"
              />
              <span className="tag crimson">{props.sportTag}</span>
          </div>

          <div className={props.classes}>
              <Link to={"#"}><h3>{props.title}</h3></Link>
          </div>

      </div>
  )
}
export default ArticleCard;