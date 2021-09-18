import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserSecret, faSearch} from "@fortawesome/free-solid-svg-icons";

//components
import {logo250} from "../../images";
import Backdrop from '../drawerMenu/Backdrop';
import DrawerMenu from "../drawerMenu/DrawerMenu";

const Header = () => {

  return(
      <>
          <div className={"header h-container"}>
              {/* MENU */}
              <div className={"menu"}>
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
              <div className={"search"}>
                  <FontAwesomeIcon
                      icon={faUserSecret}
                      className="text-gray-500 invisible"
                  />
              </div>
          </div>

      </>

  )
}
export default Header;