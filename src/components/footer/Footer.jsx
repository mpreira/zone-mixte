import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faUserSecret} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return(
      <div className="footer">
          <p className="w-full flex justify-center mb-4">
              <Link to={"#"} className="mx-2">
                  <FontAwesomeIcon icon={faFacebook} className="fa-lg" />
              </Link>

              <Link to={"#"} className="mx-2">
                  <FontAwesomeIcon icon={faTwitter} className="fa-lg" />
              </Link>

              <Link to={"#"} className="mx-2">
                  <FontAwesomeIcon icon={faInstagram} className="fa-lg" />
              </Link>
          </p>
          <p className="w-full flex justify-center">© Zone Mixte 2021</p>
      </div>
  )
}
export default Footer;