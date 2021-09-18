import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCompass, faNewspaper, faPlayCircle, faClock} from "@fortawesome/free-regular-svg-icons";
import {Link} from "react-router-dom";

const MobileNav = () => {
  return(
      <div className="mobile-nav">
          <Link to={"#"}>
              <FontAwesomeIcon
                  icon={faCompass}
                  className="fa-lg"
              />
          </Link>
          <Link to={"#"}>
              <FontAwesomeIcon
                  icon={faNewspaper}
                  className="fa-lg"
              />
          </Link>
          <Link to={"#"}>
              <FontAwesomeIcon
                  icon={faPlayCircle}
                  className="fa-lg"
              />
          </Link>
          <Link to={"#"}>
              <FontAwesomeIcon
                  icon={faClock}
                  className="fa-lg"
              />
          </Link>
      </div>
  )
}
export default MobileNav;