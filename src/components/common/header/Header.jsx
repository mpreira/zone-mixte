import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faSearch} from "@fortawesome/free-solid-svg-icons";

//components
import {logo250} from "../../../images";

const Header = () => {
  return(
      <div className={"header container"}>
        {/* MENU */}
        <div className={"menu"}>
          <FontAwesomeIcon
              icon={faBars}
              className="text-gray-500"
          />
        </div>

        {/* LOGO */}
        <div className={"logo"}>
         <img src={logo250} alt={"logo"} />
        </div>

        {/* SEARCH */}
        <div className={"search"}>
          <FontAwesomeIcon
              icon={faSearch}
              className="text-gray-500"
          />
        </div>
      </div>
  )
}
export default Header;