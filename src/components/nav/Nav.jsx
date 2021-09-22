import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCompass, faNewspaper, faPlayCircle, faClock} from "@fortawesome/free-regular-svg-icons";
import {faVideo} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Nav = () => {
  return(
      <div className="nav">
          <div className="flex flex-col justify-start items-start">
              <Link to={"#"}>
                  <FontAwesomeIcon icon={faCompass} />
                  <span>Catégories</span>
              </Link>

              <Link to={"#"}>
                  <FontAwesomeIcon icon={faNewspaper} />
                  <span>Articles</span>
              </Link>

              <Link to={"#"}>
                  <FontAwesomeIcon icon={faVideo} />
                  <span>Vidéos</span>
              </Link>

              <Link to={"#"}>
                  <FontAwesomeIcon icon={faClock} />
                  <span>Dernières infos</span>
              </Link>
          </div>

      </div>
  )
}
export default Nav;