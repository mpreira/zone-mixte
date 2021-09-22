import React from "react";
import {Link} from "react-router-dom";
import Moment from "react-moment";
import 'moment/locale/fr';

const ArticleCard = props => {

    const timeDetails = '2021-04-19T12:59-0500';

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
              <Moment
                  className="text-xs text-gray-400"
                  fromNow
                  locale="fr"
              >
                  {timeDetails}
              </Moment>
          </div>

      </div>
  )
}
export default ArticleCard;