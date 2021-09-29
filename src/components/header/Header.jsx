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
              <div className={"logo"}>
                  <img src={logo250} alt={"logo"} />
              </div>

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

                  <Link to={"#"}>
                      <FontAwesomeIcon
                          icon={faUserSecret}
                          className="text-gray-500 invisible"
                      />
                  </Link>

              </div>
          </div>

      </>

  )
}
export default Header;