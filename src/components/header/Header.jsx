import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserSecret, faSearch} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";

//components
import {logo250} from "../../images";
import {Link} from "react-router-dom";

const Header = () => {

  return(
      <>
          <div className={"header h-container"}>
              {/* MENU */}
              <div className={"search"}>
                  <FontAwesomeIcon
                      icon={faSearch}
                      className="text-gray-500 invisible"
                  />
              </div>

              {/* LOGO */}
              <Link
                  className={"logo"}
                  to={"/accueil"}
              >
                  <img src={logo250} alt={"logo"} />
              </Link>

              {/* SEARCH */}
              <div className={"menu"}>
                  <Link to={"#"}>
                      <FontAwesomeIcon icon={faFacebook} className="fa-lg" />
                  </Link>

                  <Link to={"#"}>
                      <FontAwesomeIcon icon={faTwitter} className="fa-lg" />
                  </Link>

                  <Link to={"#"}>
                      <FontAwesomeIcon icon={faInstagram} className="fa-lg" />
                  </Link>

                  <Link to={"/mon-compte"}>
                      <FontAwesomeIcon
                          icon={faUserSecret}
                          className="fa-lg"
                      />
                  </Link>

              </div>
          </div>

      </>

  )
}
export default Header;