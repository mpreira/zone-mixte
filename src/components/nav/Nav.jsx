import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCompass, faNewspaper, faClock} from "@fortawesome/free-regular-svg-icons";
import {faVideo, faHome} from "@fortawesome/free-solid-svg-icons";
import {Link, useLocation} from "react-router-dom";

const Nav = () => {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

  return(
      <div className="nav">
          <div className="flex flex-col justify-start items-start">
              <Link
                  to={"/accueil"}
                  className={
                      splitLocation[1] === "accueil"
                          ? "active"
                          : ""
                  }
              >
                  <FontAwesomeIcon icon={faHome} />
                  <span>Accueil</span>
              </Link>

              <Link
                  to={"/categories"}
                  className={
                      splitLocation[1] === "categories"
                          ? "active"
                          : ""
                  }
              >
                  <FontAwesomeIcon icon={faCompass} />
                  <span>Catégories</span>
              </Link>

              <Link
                  to={"/articles"}
                  className={
                      splitLocation[1] === "articles"
                          ? "active"
                          : ""
                  }
              >
                  <FontAwesomeIcon icon={faNewspaper} />
                  <span>Articles</span>
              </Link>

              <Link
                  to={"/videos"}
                  className={
                      splitLocation[1] === "videos"
                          ? "active"
                          : ""
                  }
              >
                  <FontAwesomeIcon icon={faVideo} />
                  <span>Vidéos</span>
              </Link>

              <Link
                  to={"/chrono"}
                  className={
                      splitLocation[1] === "chrono"
                          ? "active"
                          : ""
                  }
              >
                  <FontAwesomeIcon icon={faClock} />
                  <span>Dernières infos</span>
              </Link>
          </div>

      </div>
  )
}
export default Nav;