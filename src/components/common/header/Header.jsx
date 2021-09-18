import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faSearch} from "@fortawesome/free-solid-svg-icons";

//components
import {logo250} from "../../../images";
import Backdrop from '../../drawerMenu/Backdrop';
import DrawerMenu from "../../drawerMenu/DrawerMenu";

const Header = () => {

    /*toggle menu*/
    const [drawerOpening, setDrawerOpening] = useState(false);
    const [backdropOpening, setBackdropOpening] = useState(false);

    const handleOpening = () => {
        setDrawerOpening(true);
        setBackdropOpening(true);
    };

    const handleChange = (drawerOpening, backdropOpening) => {
        setDrawerOpening(drawerOpening);
        setBackdropOpening(backdropOpening);
    };

  return(
      <>
          <div className={"header container"}>
              {/* MENU */}
              <div className={"menu"}>
                  <FontAwesomeIcon
                      icon={faBars}
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
                      icon={faSearch}
                      className="text-gray-500"
                  />
              </div>
          </div>

      </>

  )
}
export default Header;