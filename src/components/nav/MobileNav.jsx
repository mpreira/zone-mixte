import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCompass, faNewspaper, faPlayCircle, faClock} from "@fortawesome/free-regular-svg-icons";
import {faVideo, faHome} from "@fortawesome/free-solid-svg-icons";
import {Link, useLocation} from "react-router-dom";

const MobileNav = () => {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

  return(
      <div className="mobile-nav">
          <Link
              to={"/accueil"}
              className={
                  splitLocation[1] === "accueil"
                  ? "active"
                  : ""
              }
          >
              <FontAwesomeIcon
                  icon={faHome}
                  className="fa-lg"
              />
          </Link>
          <Link
              to={"/categories"}
              className={
                  splitLocation[1] === "categories"
                      ? "active"
                      : ""
              }
          >
              <FontAwesomeIcon
                  icon={faCompass}
                  className="fa-lg"
              />
          </Link>
          <Link
              to={"/articles"}
              className={
                  splitLocation[1] === "articles"
                      ? "active"
                      : ""
              }
          >
              <FontAwesomeIcon
                  icon={faNewspaper}
                  className="fa-lg"
              />
          </Link>
          <Link
              to={"/videos"}
              className={
                  splitLocation[1] === "videos"
                      ? "active"
                      : ""
              }
          >
              <FontAwesomeIcon
                  icon={faVideo}
                  className="fa-lg"
              />
          </Link>
          <Link
              to={"/chrono"}
              className={
                  splitLocation[1] === "chrono"
                      ? "active"
                      : ""
              }
          >
              <FontAwesomeIcon
                  icon={faClock}
                  className="fa-lg"
              />
          </Link>
      </div>
  )
}
export default MobileNav;