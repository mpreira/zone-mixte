import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFutbol, faFootballBall} from "@fortawesome/free-solid-svg-icons";

const Tlines = () => {
  return(
      <div className={"gray-line"}>

          <div className="timeline-news">
              <FontAwesomeIcon icon={faFutbol} className={"timeline-icon"} />
                <div className={""}>
                    <span className={"timeline-time"}>00.00</span>
                    lorem ipsum sin dolor amet bloubloublou bloubloublou
              </div>

          </div>

          <div className="timeline-news">
              <FontAwesomeIcon icon={faFootballBall} className={"timeline-icon"} />
              <div className={""}>
                  <span className={"timeline-time"}>00.00</span>
                  <span>lorem ipsum sin dolor amet bloubloublou</span>
              </div>

          </div>

          <div className="timeline-news">
              <FontAwesomeIcon icon={faFutbol} className={"timeline-icon"} />
              <div className={""}>
                  <span className={"timeline-time"}>00.00</span>
                  <span>lorem ipsum sin dolor amet</span>
              </div>

          </div>

      </div>
  )
}
export default Tlines;